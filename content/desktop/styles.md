Finch lets you save your element styles and reuse them for other elements in the version you're working on.

## Usage

Styles are separated into Text Styles and Box Styles, a system similar to how styles are organized in Sketch. They can be created and applied from the respective style dropdowns in either the **Type** or **Box** section of the editor sidebar.

These dropdowns list all your created styles and can be used to create new ones. To apply an existing style, select the target element and simply choose the style you want from the dropdown. 

### Creating a Style

To create a new style, **_click_** on either the Text Style dropdown or the Box Style dropdown and select **Create New Style**. 
The element you have selected will act as the base for your new style and it will contain all the respective properties that were defined on the base element.

### Updating a Style

If you change an element that has a style applied, it will not automatically change the style globally. To apply the newly made changes to the style, **_click_** on the sync button that will appear on the right side of the style dropdown after you've made the changes.

## Responsive Styles
All the styles are responsive and can be utilised together with the Media Editor.

To make a style responsive, open the Media Editor and select the preferred media range. All style changes made at this point will only affect the selected range. One style can contain different properties for multiple media ranges.

To learn more about using the Media Editor, please check the [Media queries](/desktop/media-queries.md) section.


## Importing from Sketch
If you're using Sketch, you can also import all your Sketch styles directly into Finch. To do this, you must first install the [Finch Sketch plugin](https://github.com/finchalyzer/finch-sketch).


After installing it you can export them by selecting **Plugins -> Finch -> Export Styles** from the Sketch top menu bar. This will open Finch app and prompt you to choose the target project and version.

>![](/img/sketch-plugin.gif)

Our Sketch plugin can also be used to export your defined Sketch document colors to your Finch project's color palette. To do this, select **Plugins -> Finch -> Export Document Colors**. This will again prompt you to select the target project and version.
