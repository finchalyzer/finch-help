If you run into any problems with Finch Wordpress plugin that are not covered here, don't hesitate to [contact us](/support.md) directly!

## Finch plugin can't write files on my server

It means that your server doesn't allow Finch to save your version stylesheets locally which is done to ensure the best experience for your site's visitors.

With insufficient permissions the stylesheets will be served from our external CDN. 

**Finch will still work** but please note that load times could be affected negatively.

We strongly recommend you set up file permissions for your Finch plugin directory in a way that Wordpress can write to it.   