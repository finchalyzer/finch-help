You can automatically set live any of your projects versions you made with Finch. All of the versions changes will be applied to your website and visible to any visitor.

**Note: ** If your site is built with Wordpress, you can skip this part and use the [Finch Wordpress plugin](wordpress/index.md).

## Copy snippet

To set a version live, Finch needs to be connected to your website via a small code snippet.

You can find the snippet at your projects Connection settings.

>![](/img/snippet.gif)
>> Finding projects snippet


Copy-paste the snippet in your websites code right **before** the `</head>` closing tag. It should look like this:

## Check the connection

After copying the snippet, at the Connection view, check if the setup was successful.

>![](/img/check-connection.gif)
>> Check snippet status

## Set a version live

If the snippet is setup correctly – you are ready to go and you can setup any of the projects versions live.

**Note: ** All new changes made to a live version will be applied to the website automatically. If you want to avoid that – duplicate the version and make the changes there.


## How does that work?

The Finch snippet adds two files to your website:

- a static CSS file that contains only the changes you made
- the Finch javascript snippet that does nothing to your website for regular visitors. The snippet is only activated while sharing a version in private or presentation mode and adds the Finch sidebar to your site.
