const fs = require('fs');
const { CLA_SIGNED_LABEL, CLA_NOT_SIGNED_LABEL } = process.env;

// Get the PR author
const prAuthor = context.payload.pull_request?.user.login || context.payload.issue.user.login;

// Check if this is a CLA agreement comment
const isClaComment = context.payload.comment?.body.includes('I have read the CLA and agree to its terms');

if (isClaComment) {
  // Create CLA signature file
  const claContent = `# Contributor License Agreement Signature

I have read and agree to the terms of the [Contributor License Agreement](CLA.md).

**Contributor Name:** ${prAuthor}
**Email Address:** ${context.payload.comment.user.email || 'Not provided'}
**GitHub Username:** ${prAuthor}
**Date:** ${new Date().toISOString().split('T')[0]}
**Signature:** ${context.payload.comment.id}

By signing this CLA, I confirm that:
1. I am the original author of my contributions
2. I have the right to submit these contributions
3. My contributions do not violate any third-party rights
4. I grant the license freely and voluntarily`;

  try {
    await github.rest.repos.createOrUpdateFileContents({
      owner: context.repo.owner,
      repo: context.repo.repo,
      path: `.github/CLA_SIGNED/${prAuthor}.md`,
      message: `Add CLA signature for ${prAuthor}`,
      content: Buffer.from(claContent).toString('base64'),
      branch: 'main'
    });
    
    // Add CLA signed label
    await github.rest.issues.addLabels({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      labels: [CLA_SIGNED_LABEL]
    });
    
    // Remove CLA not signed label if it exists
    await github.rest.issues.removeLabel({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      name: CLA_NOT_SIGNED_LABEL
    });
    
    // Comment on the PR
    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: `Thank you for signing the CLA, @${prAuthor}! Your pull request will be reviewed by our team.`
    });
  } catch (error) {
    console.error('Error creating CLA signature:', error);
  }
} else if (context.payload.pull_request) {
  // Check if author has signed CLA
  const claPath = `.github/CLA_SIGNED/${prAuthor}.md`;
  
  try {
    // Try to read the CLA file
    const claContent = fs.readFileSync(claPath, 'utf8');
    const hasSignedCLA = claContent.includes('Signature:');
    
    if (hasSignedCLA) {
      // Add CLA signed label
      await github.rest.issues.addLabels({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        labels: [CLA_SIGNED_LABEL]
      });
      
      // Remove CLA not signed label if it exists
      await github.rest.issues.removeLabel({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: context.issue.number,
        name: CLA_NOT_SIGNED_LABEL
      });
    } else {
      throw new Error('CLA not properly signed');
    }
  } catch (error) {
    // Add CLA not signed label
    await github.rest.issues.addLabels({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      labels: [CLA_NOT_SIGNED_LABEL]
    });
    
    // Remove CLA signed label if it exists
    await github.rest.issues.removeLabel({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      name: CLA_SIGNED_LABEL
    });
    
    // Comment on the PR
    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.issue.number,
      body: `@${prAuthor} has not signed the CLA. Please read and sign the [Contributor License Agreement](CLA.md) before contributing.`
    });
    
    // Fail the check
    core.setFailed(`@${prAuthor} has not signed the CLA. Please read and sign the [Contributor License Agreement](CLA.md) before contributing.`);
  }
} 
