# Fork & Deploy `dc-demostore-core`

Before starting to use `dc-demostore-cli`, you'll need to deploy a fork of this project to something like Vercel or Netlify.

This is because your hosted application also contains an API service used for integration (getting products etc.)

 We'll cover Vercel here, but you can choose any deployment platform. So, start by forking this repo, then head over to [Vercel](https://vercel.com/) to create a new project pointing to your fork. Hobby accounts are free, go ahead and create one if you don't already have one.

Then click "New Project"

![Vercel Create Project](../media/vercel-create.png)

It'll prompt you to import one of your repositories. Click Import for your forked version of `dc-demostore-core`:

![Vercel Import Forked Project](../media/vercel-import.png)

On the next screen you can simply click "Deploy". At this stage, it's also possible to setup environment variables (for instance to point to your Dynamic Content instance), but you can do that later, with a re-deployment to take effect.

![Vercel Import Forked Project](../media/vercel-deploy.png)

Once depoyed, you'll see this screen:

![Vercel Import Forked Project](../media/vercel-deployed.png)

Note the URL under "Domains" (highlighted above). You'll need that when configuring `dc-demostore-cli` in the next step.

[back](../README.md)
