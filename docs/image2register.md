# image2register

This is a simple image registration tool that can be used instead of napari-imsmicrolink.

You should use the napari-wsireg app for automatically registering your microscopy images together, but you can use
image2registration to co-register your IMS data with the postIMS-AF.

This app defines the `Fixed` and `Moving` modalities. As the names suggest, the `Fixed` modality should normally represent the microscopy modality to which you want to co-register your IMS data. Consequently, the `Moving` modality is the IMS dataset.


<figure markdown>
  ![launcher](assets/dialog_register.jpg){ width=600px; }
</figure>

## Steps to get transformation information

1. Select your `Fixed` image by clicking on the `Add/remove dataset...` button. This opens up a new popup window where you can `Add` and `Remove` images.
2. Select the channels you want to immediately display. All channels will be loaded but not all displayed if you've unselected some.
3. Repeat this for the `Moving` modality.
4. Click on the :fontawesome-solid-circle-plus: icon in the toolbar on the left-hand side (or click ++2++ on your keyboard to activate the `add` mode).
5. Select at least 3 points in each image to estimate transformation matrix. After that, you can click in either image and the other will be predicted.
6. Once you are happy with your results. Save them as the `i2r.json` format which can be used in the [image2viewer](image2viewer.md) app.


You can overlay any of the  `moving` images on the `fixed` image by selecting an image in the `Overlay` combobox. You can also toggle the view type between `Random` image (where we fill-in the image with random values) or `Overlay` which directly represents the co-registered image.

<figure markdown>
  ![launcher](assets/dialog_register_overlay.jpg){ width=600px; }
</figure>

!!! note "Prediction"
    The registration app only requires 3 points to estimate transformation matrix. Once three points have been added to **both** views, it will start to `predict` where points **might** be. For instance, if you add a new point in the `Fixed` viewer, it will automatically place a point in the `Moving` viewer. You can then take a look if you are happy with the position and move it to where it **should** be. The more points you have, the better the predicted transformation will be.


!!! note "Compatibility with `napari-imsmicrolink`"
    If you have previous `napari-imsmicrolink` registrations, you can load them into `image2register` by clicking on the `Import project` button. The output of the `napari-imsmicrolink` plugin contains information about what images were used, the pixel size and fiducial markers but it is not guaranteed to work with `image2register` app. The reason for this is that `napari-imsmicrolink` permits users to rotate and pad their images while `image2register` does not.

## Dialogs and widgets

### Viewer toolbar

To the left of each canvas there is a toolbar with a number of widgets.

- :fontawesome-solid-layer-group: - this button opens up `Layer controls` for this particular view. See [layer-controls](/docs/assets/viewer_layers.jpg)
- :material-chevron-double-up: - this button moves the points layer to the top. This is sometimes necessary. Use if you can't see the points you are adding!
- :material-magnify: - activate the `zoom` mode in the viewer. You can also activate it by pressing ++1++ on your keyboard or temporarily enable it by pressing ++space++ on your keyboard if any of the other modes is active.
- :fontawesome-solid-circle-plus: - activate the `add` mode in the viewer. This mode let's you add fiducial markers to the image. You can also activate it by pressing ++2++ on your keyboard.
- :material-cursor-move: - activate the `move` mode in the viewer. This mode lets you select and move the fiducial markers to a new position. Each time you do this, a new transformation matrix is computed. You can also activate it by pressing ++3++ on your keyboard.
- :material-close-circle: - remove the last added point.
- :material-close-circle-multiple: - remove all currently selected points (you will be asked to confirm).
- :fontawesome-solid-trash-can: - remove all points (you will be asked to confirm).


### Image selection

Click on the `Add/remove dataset...` button to open the popup window.

<figure markdown>
  ![image-selection](assets/dialog_load_image.jpg)
</figure>

- Click on `Add image` button to add new image to the list.
- Click on the `Remove image` to remove one or more image from the list.
- Click on the :fontawesome-solid-trash-can: to delete the single image and all it's layers.


### Channel selection

Click on the `Select channels...` button to open the popup window.

<figure markdown>
  ![image-selection](assets/dialog_select_channels.jpg){ width=600px; }
</figure>

- Check/uncheck items in the table to toggle the visibility of an image layer.
- You can click on the header of the first column (one without any label) to quickly toggle the visibility of all layers.

!!! warning Warning
    The visibility of layer is not being synchronized between the viewer state (e.g. toggled directly in the layer list) and in the table view (in this popup dialog). Thi


### Fiducials table

Click on the `Show fiducials table...` button to open the popup window.

<figure markdown>
  ![launcher](assets/dialog_fiducials.jpg){ width=600px; }
</figure>

- Double-click with the ++left-button++ on a row to select a pair of points and zoom-in on them in each canvas. You can then easily adjust their position to improve the alignment of layers.
- Press ++delete++ or ++backspace++ on your keyboard while selecting a point to remove it from the table.

!!! warning Warning
    Once point is deleted from the table, it cannot be recovered.
