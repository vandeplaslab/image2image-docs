var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome","text":"<p>image2image is a GUI application consisting of several smaller programs that perform a specific task.</p> <p>To launch any of the apps you use the 'launcher' app.</p> <p></p>"},{"location":"index.html#available-apps","title":"Available apps","text":""},{"location":"index.html#image2register","title":"image2register","text":"<p>This app will let you register your imaging mass spectrometry (or any other imaging) dataset with another image (e.g. postIMS AF). </p>"},{"location":"index.html#image2viewer","title":"image2viewer","text":"<p>This app let's you visualise and overlay multiple imaging datasets (IMS, microscopy, CODEX, etc) in one viewer, even if each of those has different transformation information.</p>"},{"location":"index.html#image2export-work-in-progress","title":"image2export (work in progress)","text":"<p>This app enables export of microscopy data in a format that is compatible with Raf Van de Plas' MATLAB fusion app.</p>"},{"location":"index.html#some-other-apps-that-will-be-added-in-the-future","title":"Some other apps that will be added in the future","text":""},{"location":"index.html#image2sync-coming","title":"image2sync (coming)","text":"<p>This app will provide interface similar to image2viewer but will have two side-by-side canvases for synchronized viewing. Very helpful when trying to show masks or compare spatial patterns in different modalities.</p>"},{"location":"index.html#image2crop-coming","title":"image2crop (coming)","text":"<p>This app will let's you draw rectangles and crop microscopy data and export in ome.tiff format. This should be helpful for Raf Van de Plas' MATLAB fusion app.</p>"},{"location":"changelog.html","title":"Changelog","text":"<p>v0.1.0 17/6/2023</p> <ul> <li>Initial release</li> </ul>"},{"location":"planned.html","title":"Planned features","text":"<p>There is a number of features that we would like to add that are currently not implemented.</p> <ul> <li> Add image registration tool<ul> <li> Allow loading of microscopy and IMS datasets</li> <li> Allow extraction of arbitrary images when IMS data is .imzML or Bruker .d</li> <li> Allow export of <code>napari-imsmicrolink</code> configuration.</li> </ul> </li> <li> Add image viewer tool<ul> <li> Allow loading of microscopy and IMS datasets</li> <li> Allow extraction of arbitrary images when IMS data is .imzML or Bruker .d</li> </ul> </li> <li> Add image export tool<ul> <li> Basic implementation</li> <li> Improved performance</li> <li> Allow cancelling of tasks</li> </ul> </li> <li> Add image cropping tool</li> <li> Add synchronized viewer tool</li> </ul>"},{"location":"apps/image2crop.html","title":"image2crop","text":"<p>Error<p>This app is not currently available.</p> </p>"},{"location":"apps/image2export.html","title":"image2export","text":"<p>This app is not complete<p>This app still have some missing functionality and might not work as intended.</p> </p> <p>This app enables export of microscopy data in CSV file format that is compatible with Raf Van de Plas' fusion program. The fusion tool uses a non-standard CSV format which can be troublesome to generate using normal tools.</p>"},{"location":"apps/image2export.html#steps-to-export-images","title":"Steps to export image(s)","text":"<ol> <li>Select your image by clicking on the <code>Add/remove dataset...</code> button. This opens up a new popup window where you can <code>Add</code> and <code>Remove</code> images.</li> <li>Select the output directory by clicking on the <code>Set output directory</code> button.</li> <li>Click on the <code>Export</code> button to initiate the output. Progress of the exprt is shown in the <code>progress</code> column.</li> </ol> <p>Warning<p>This app does not have viewer canvas so the images will not be displayed!</p> </p>"},{"location":"apps/image2export.html#dialogs-and-widgets","title":"Dialogs and widgets","text":""},{"location":"apps/image2export.html#image-selection","title":"Image selection","text":"<p>Click on the <code>Add/remove dataset...</code> button to open the popup window.</p> <p></p> <ul> <li>Click on <code>Add image</code> button to add new image to the list.</li> <li>Click on the <code>Remove image</code> to remove one or more image from the list.</li> <li>Click on the  to delete the single image and all it's layers.</li> </ul>"},{"location":"apps/image2register.html","title":"image2register","text":"<p>This is a simple image registration tool that can be used instead of napari-imsmicrolink.</p> <p>You should use the napari-wsireg app for automatically registering your microscopy images together, but you can use image2registration to co-register your IMS data with the postIMS-AF.</p> <p>This app defines the <code>Fixed</code> and <code>Moving</code> modalities. As the names suggest, the <code>Fixed</code> modality should normally represent the microscopy modality to which you want to co-register your IMS data. Consequently, the <code>Moving</code> modality is the IMS dataset.</p> <p></p>"},{"location":"apps/image2register.html#steps-to-get-transformation-information","title":"Steps to get transformation information","text":"<ol> <li>Select your <code>Fixed</code> image by clicking on the <code>Add/remove dataset...</code> button. This opens up a new popup window where you can <code>Add</code> and <code>Remove</code> images.</li> <li>Select the channels you want to immediately display. All channels will be loaded but not all displayed if you've unselected some.</li> <li>Repeat this for the <code>Moving</code> modality.</li> <li>Click on the  icon in the toolbar on the left-hand side (or click 2 on your keyboard to activate the <code>add</code> mode).</li> <li>Select at least 3 points in each image to estimate transformation matrix. After that, you can click in either image and the other will be predicted.</li> <li>Once you are happy with your results. Save them as the <code>i2r.json</code> format which can be used in the image2viewer app.</li> </ol> <p>You can overlay any of the  <code>moving</code> images on the <code>fixed</code> image by selecting an image in the <code>Overlay</code> combobox. You can also toggle the view type between <code>Random</code> image (where we fill-in the image with random values) or <code>Overlay</code> which directly represents the co-registered image.</p> <p></p> <p>Prediction</p> <p>The registration app only requires 3 points to estimate transformation matrix. Once three points have been added to both views, it will start to <code>predict</code> where points might be. For instance, if you add a new point in the <code>Fixed</code> viewer, it will automatically place a point in the <code>Moving</code> viewer. You can then take a look if you are happy with the position and move it to where it should be. The more points you have, the better the predicted transformation will be.</p> <p>Compatibility with <code>napari-imsmicrolink</code></p> <p>If you have previous <code>napari-imsmicrolink</code> registrations, you can load them into <code>image2register</code> by clicking on the <code>Import project</code> button. The output of the <code>napari-imsmicrolink</code> plugin contains information about what images were used, the pixel size and fiducial markers but it is not guaranteed to work with <code>image2register</code> app. The reason for this is that <code>napari-imsmicrolink</code> permits users to rotate and pad their images while <code>image2register</code> does not.</p>"},{"location":"apps/image2register.html#dialogs-and-widgets","title":"Dialogs and widgets","text":""},{"location":"apps/image2register.html#viewer-toolbar","title":"Viewer toolbar","text":"<p>To the left of each canvas there is a toolbar with a number of widgets.</p> <ul> <li> - this button opens up <code>Layer controls</code> for this particular view. See layer-controls</li> <li> - this button moves the points layer to the top. This is sometimes necessary. Use if you can't see the points you are adding!</li> <li> - activate the <code>zoom</code> mode in the viewer. You can also activate it by pressing 1 on your keyboard or temporarily enable it by pressing Space on your keyboard if any of the other modes is active.</li> <li> - activate the <code>add</code> mode in the viewer. This mode let's you add fiducial markers to the image. You can also activate it by pressing 2 on your keyboard.</li> <li> - activate the <code>move</code> mode in the viewer. This mode lets you select and move the fiducial markers to a new position. Each time you do this, a new transformation matrix is computed. You can also activate it by pressing 3 on your keyboard.</li> <li> - remove the last added point.</li> <li> - remove all currently selected points (you will be asked to confirm).</li> <li> - remove all points (you will be asked to confirm).</li> </ul>"},{"location":"apps/image2register.html#image-selection","title":"Image selection","text":"<p>Click on the <code>Add/remove dataset...</code> button to open the popup window.</p> <p></p> <ul> <li>Click on <code>Add image</code> button to add new image to the list.</li> <li>Click on the <code>Remove image</code> to remove one or more image from the list.</li> <li>Click on the  to delete the single image and all it's layers.</li> </ul>"},{"location":"apps/image2register.html#channel-selection","title":"Channel selection","text":"<p>Click on the <code>Select channels...</code> button to open the popup window.</p> <p></p> <ul> <li>Check/uncheck items in the table to toggle the visibility of an image layer.</li> <li>You can click on the header of the first column (one without any label) to quickly toggle the visibility of all layers.</li> </ul> <p>Warning</p> <p>The visibility of layer is not being synchronized between the viewer state (e.g. toggled directly in the layer list) and in the table view (in this popup dialog). Thi</p>"},{"location":"apps/image2register.html#fiducials-table","title":"Fiducials table","text":"<p>Click on the <code>Show fiducials table...</code> button to open the popup window.</p> <p></p> <ul> <li>Double-click with the Left Button on a row to select a pair of points and zoom-in on them in each canvas. You can then easily adjust their position to improve the alignment of layers.</li> <li>Press Del or Backspace on your keyboard while selecting a point to remove it from the table.</li> </ul> <p>Warning</p> <p>Once point is deleted from the table, it cannot be recovered.</p>"},{"location":"apps/image2sync.html","title":"image2sync","text":"<p>Error<p>This app is not currently available.</p> </p>"},{"location":"apps/image2viewer.html","title":"image2viewer","text":"<p>This app can be used to overlay multiple images together. You can optionally display images with different registration (transformation) information, although, all the images must have ONE common image.</p> <p>For instance, you have the following images:</p> <ul> <li>H&amp;E or PAS stain</li> <li>preIMS AF</li> <li>IMS</li> <li>postIMS AF</li> </ul> <p>Normally you would co-register your H&amp;E, preIMS and postIMS AF together but for some reason you didn't, but you still wanted to overlay them. In this case, you would perform manual registration using the image2register app which produces the <code>i2r.json</code> configuration file.</p> <p></p>"},{"location":"apps/image2viewer.html#steps-to-overlay-multiple-images-together","title":"Steps to overlay multiple images together","text":"<ol> <li>Select your images by clicking on the <code>Add/remove dataset...</code> button. This opens up a new popup window where you can <code>Add</code> and <code>Remove</code> images. Make sure to also specify the pixel size/resolution in the table. You can do so by double-clicking Left Button in the field and entering the value. </li> <li>Select the channels that you want to immediately display. All channels will be loaded BUT not all of them will be displayed immediately. You can show/hide them by using the <code>layer controls</code> and clicking on the / icon.</li> <li>Click on the <code>Select transformation</code> button. This opens a new popup window where you can load and select transformations for each image. To add a new transformation from the <code>i2r.json</code> file, click on the  icon.</li> <li>Adjust the visuals of each of the layers you wish to see in the <code>Layer controls</code> section.</li> <li>You can export the information about currently loaded images to a <code>i2v.json</code> project file by clickin on the <code>Export project...</code> button. These can be re-loaded at later stage by using the <code>Import project...</code> button.</li> </ol>"},{"location":"apps/image2viewer.html#dialogs-and-widgets","title":"Dialogs and widgets","text":""},{"location":"apps/image2viewer.html#image-selection","title":"Image selection","text":"<p>Click on the <code>Add/remove dataset...</code> button to open the popup window.</p> <p></p> <ul> <li>Click on <code>Add image</code> button to add new image to the list.</li> <li>Click on the <code>Remove image</code> to remove one or more image from the list.</li> <li>Double-click Left Button on the value in the <code>pixel size (um)</code> to adjust the spatial resolution of the image (and all it's channels).</li> <li>Click on the  to delete the single image and all it's layers.</li> </ul>"},{"location":"apps/image2viewer.html#image-transformation","title":"Image transformation","text":"<p>Click on the <code>Select transformation</code> button to open the popup window.</p> <p></p> <ul> <li>Click on the  to load new transformation information from the <code>i2r.json</code> or <code>i2r.toml</code> file. Once loaded, the transformation will appear in the combobox to the left of the button.</li> <li>Check/uncheck items in the table to select which images should to current transformation be applied to. Click on the <code>Apply to selected</code> button to apply it. Changes will be immediately reflected in the image canvas.</li> <li>You can always reset the transformation bu applying the <code>Identity matrix</code> option.</li> </ul> <p>Warning</p> <p>If the pixel size/resolution information is incorrect, you might get unexpected results.</p>"}]}