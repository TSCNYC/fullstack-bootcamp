const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const labels = [
  {
    name: 'cla-signed',
    color: '2ecc71',
    description: 'Contributor has signed the CLA'
  },
  {
    name: 'cla-not-signed',
    color: 'e74c3c',
    description: 'Contributor has not signed the CLA'
  }
];

async function createLabels() {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');

  for (const label of labels) {
    try {
      await octokit.issues.createLabel({
        owner,
        repo,
        ...label
      });
      console.log(`Created label: ${label.name}`);
    } catch (error) {
      if (error.status === 422) {
        console.log(`Label ${label.name} already exists`);
      } else {
        console.error(`Error creating label ${label.name}:`, error);
      }
    }
  }
}

createLabels().catch(console.error); 
