var __index = {"config":{"lang":["en"],"separator":"[\\s\\-]+","pipeline":["stopWordFilter"]},"docs":[{"location":"index.html","title":"Welcome","text":"<p>image2image is a GUI application consisting of several small(ish) apps that perform actions such as visualization, registration, channel merging, and much more.</p> <p>To launch any of the apps you use the 'launcher' app.</p> <p></p> <p>Applicatiosn can be split between three main themes:</p>"},{"location":"index.html#visualisation-apps","title":"Visualisation apps","text":""},{"location":"index.html#viewer-app","title":"Viewer app","text":"<p>This app let's you visualise multiple iamging datasets (e.g. IMS, microscopy, CODEX, Xenium, masks, etc) in one viewer. It let's you load multiple datasets together, apply different transformations to each dataset (e.g. loading positive and negative mode IMS data simultaneously).</p>"},{"location":"index.html#registration-apps","title":"Registration apps","text":""},{"location":"index.html#registration-app","title":"Registration app","text":"<p>This app let's you establish the affine transformation between a pair of images using fiducial markers.  This can be useful in co-registering imaging mass spectrometry (IMS) data with microscopy data.</p>"},{"location":"index.html#elastix-app","title":"Elastix app","text":"<p>This app enables registration of whole slide images (WSI) using the <code>Elastix</code> library.</p>"},{"location":"index.html#valis-app","title":"Valis app","text":"<p>This app enables registration of whole slide images (WSI) using the <code>Valis</code> library. </p>"},{"location":"index.html#utility-apps","title":"Utility apps","text":""},{"location":"index.html#crop-app","title":"Crop app","text":"<p>This app let's you crop microscopy images using polygons or rectangles and export them in OME-TIFF format.</p>"},{"location":"index.html#convert-app","title":"Convert app","text":"<p>This app enables conversion of many microscopy formats into an OME-TIFF. This is useful for compatibility with other software.</p>"},{"location":"index.html#merge-app","title":"Merge app","text":"<p>This app enables merging of multiple channels (or multiple files) into a single OME-TIFF file. This is useful for compatibility with other software.</p>"},{"location":"index.html#fusion-app","title":"Fusion app","text":"<p>This app enables export of microscopy data in a format that is compatible with Raf Van de Plas' MATLAB fusion app.</p>"},{"location":"index.html#some-other-apps-that-will-be-added-in-the-future","title":"Some other apps that will be added in the future","text":""},{"location":"index.html#sync-app-coming","title":"Sync app (coming)","text":"<p>This app will provide interface similar to image2viewer but will have two side-by-side canvases for synchronized viewing. Very helpful when trying to show masks or compare spatial patterns in different modalities.</p>"},{"location":"changelog.html","title":"Changelog","text":"<p>v0.1.0 17/6/2023</p> <ul> <li>Initial release</li> </ul>"},{"location":"planned.html","title":"Planned features","text":"<p>There is a number of features that we would like to add that are currently not implemented.</p> <ul> <li> Add image registration tool<ul> <li> Allow loading of microscopy and IMS datasets</li> <li> Allow extraction of arbitrary images when IMS data is .imzML or Bruker .d</li> <li> Allow export of <code>napari-imsmicrolink</code> configuration.</li> </ul> </li> <li> Add image viewer tool<ul> <li> Allow loading of microscopy and IMS datasets</li> <li> Allow extraction of arbitrary images when IMS data is .imzML or Bruker .d</li> </ul> </li> <li> Add image export tool<ul> <li> Basic implementation</li> <li> Improved performance</li> <li> Allow cancelling of tasks</li> </ul> </li> <li> Add image cropping tool</li> <li> Add synchronized viewer tool</li> </ul>"},{"location":"request.html","title":"Feature Requests / Bug Reports","text":"<p>You can request new features and report bugs in a couple of different ways.</p> <ol> <li>Send a request using the <code>Help &gt; Send feedback or request...</code> menu option. This will open a popup window where you can provide more information. We are using sentry.io under the hood.</li> <li>Create a GitHub issue on the image2image-docs public website. (Requires a GitHub account)</li> <li>Contact Lukasz G. Migas using Slack or email.</li> </ol>"},{"location":"request.html#bug-monitoring","title":"Bug monitoring","text":"<p>The app uses sentry.io for automatic bug reports. This sends a HTML request with error tracebacks to sentry so that we can figure out what went wrong. You can disable this behaviour by using the <code>Help &gt; Telemetry...</code> menu option and then selecting <code>No, I'd prefer not to send bug reports.</code>.</p> <p>Note</p> <pre><code>While we try not to capture any personal information, this is not guaranteed and some information such as file paths might be sent to us. We don't use this information for anything other than figuring out where we have have bugs and what causes the errors to happen.\n</code></pre>"},{"location":"apps/convert.html","title":"Convert app","text":"<p>This app let's you convert multiple image formats to OME-TIFF.</p> <p></p> <p>You can adjust which channels should be included in the final image by double Left Button clicking on the channel name. </p> <p>This opens a new dialog where you can change selct or de-select channels, change their names and merge multiple channels into one.</p> <p></p> <p>You can also <code>merge</code> multiple channels within an image to form a single channel. Multiple channels are projected into a single channel by using maximum intensity projection.</p> <p>Click on the <code>Merge...</code> button to open the popup window.</p> <p></p> <p>Here, you can select several channels and merge them into a single channel. You must specify the <code>New channel name...</code> and click on the <code>Create merged channel</code> button. </p> <p>You can optionally retain the <code>merged channels</code> in the final image by checking the <code>Keep merged channels</code> checkbox.</p> <p>Click on <code>Accept</code> to save selection</p> <p>Click on <code>Accept</code> to save the selection and close the dialog.</p> <p>Once you've selected which channels should be retained and merged, they should appear like this in the table.</p> <p></p>"},{"location":"apps/crop.html","title":"Crop app","text":"<p>This app can be used for cropping (or masking) parts of an image in order to reduce the image size, improve the image registration or to remove unwanted parts of the image.</p> <p></p> Cropping of an image using the Crop app."},{"location":"apps/crop.html#steps-to-crop-an-image","title":"Steps to crop an image","text":"<ol> <li>Load image(s) by clicking on the  button. This will let you select images to load. You can alternatively drag-and-drop images into the canvas.</li> <li>Select the <code>Mask</code> layer in the viewer controls at the bottom right-hand side.</li> <li>Select the tool you wish to use. You can choose from <code>circle</code>, <code>rectangle</code>, <code>polygon</code> or <code>freehand</code> tools. </li> <li>Draw the mask on the image. You can adjust the mask by clicking on the <code>Mask</code> layer in the viewer controls and then clicking on the <code>edit</code> button. This will allow you to move the mask, change it's shape or delete it.</li> </ol> Cropping of an image using the Crop app. <p>Multiple masks are allowed</p> <p>You can draw multiple masks on the image. This is useful if you want to crop multiple regions of same image.</p> <p>Multiple images are allowed</p> <p>You can load multiple images (e.g. if they are co-registered together) and crop all of them at once. This will ensure that the cropped regions are the same in all images.</p>"},{"location":"apps/crop.html#previewing-the-cropped-image","title":"Previewing the cropped image","text":"<p>You can preview the cropped image by clicking on the <code>Preview (crop)</code> button. This will create a new image with the cropped region. </p> <p></p> Cropping of an image using the Crop app. <p>When cropping images, different shapes behave slightly differently.</p> <ul> <li>the <code>rectangle</code> shape will crop the image to the rectangle that you've drawn.</li> <li>the <code>circle</code>, <code>polygon</code> and <code>freehand</code> shapes will crop the bounding box of the polygon that you've drawn, however, any region outside of the drawn region will be masked.</li> </ul>"},{"location":"apps/crop.html#information-about-the-mask","title":"Information about the mask","text":"<p>You can see basic information about each <code>mask</code> in the <code>Image crop position</code> section of the panel.</p> <p></p> Cropping of an image using the Crop app."},{"location":"apps/elastix.html","title":"Elastix app","text":"<p>This app performs whole-slide image registration, similar to what napari-wsireg does. The main difference is that it has improved image pre-processing (which in turn improves the registration), easier creation of masks and cropping areas, utilizes a <code>project</code> structure and has much improved command-line interface.</p> <p></p>"},{"location":"apps/elastix.html#simplified-workflow-see-below-for-more-information","title":"Simplified workflow (see below for more information)","text":"<ol> <li>Load the images you wish to co-register.</li> <li>Adjust their names, parameters.</li> <li>Establish the registration paths.</li> <li>Adjust the export options.</li> <li>Execute the registration.</li> </ol>"},{"location":"apps/elastix.html#live-preview","title":"Live preview","text":"<p>You can immediately preview how your images will look like after before registration. This is extremely useful since it's important that images used for registration highlight their features. </p> <p></p> <p>To enable this, make sure to click on the <code>Use preview image</code> checkbox.</p>"},{"location":"apps/elastix.html#pre-processing","title":"Pre-processing","text":"<p>In the top-right corner of the app, you can find the list of image modalities that will be registered. You can adjust the pre-processing parameters for each modality by clicking on the <code>widget</code> or on the <code>Pre-process...</code> button.</p> <p>The widget also allows you to adjust the <code>name</code> of the modality, spatial resolution (if it was read incorrectly from the file metadata) and the <code>color</code> of the image.</p> <p>There are a number of pre-processing parameters that can be adjusted to improve the registration process. They can be roughtly divided into two categories:</p> <ul> <li>Intensity - adjusts how the intensity of the image is transformed.<ul> <li>Multi-channel images must be turned into a single-channel image, usually done by using <code>maximum intensity projection</code>.</li> <li>You can improve the contrast of the image channels by using <code>histogram equalization</code> or <code>contrast enhancement</code> (or both).</li> <li>if your image is <code>light or dark background</code> (e.g. H&amp;E) then you must <code>invert</code> the intensities</li> </ul> </li> <li>Spatial - adjusts the spatial information of the image<ul> <li>You can <code>flip</code>, <code>rotate</code> or <code>translate</code> images. This can be useful to give the image a better starting point for registration.</li> <li>You can <code>downsample</code> the image to speed-up the registration process.</li> </ul> </li> </ul> <p></p>"},{"location":"apps/elastix.html#masking","title":"Masking","text":"<p>You can create masks to focus the registration on a specific part of the image. You can start this process by clicking on the <code>Mask...</code> button which opens a new dialog window.</p> <p></p> <p>There you can create a mask for each modality that is being registered.</p> <p>Click on <code>Add mask</code></p> <p>It's important that you click on the <code>Add mask</code> button to create a new mask. If you don't do this, the mask might not be saved and you will have to start over.</p>"},{"location":"apps/elastix.html#registration-paths","title":"Registration paths","text":"<p>Just like in <code>wsireg</code>, we are using registration paths to define which images should be registered together.</p> <p>There is always a <code>source</code> modality which is going to be <code>moved</code> to the <code>target</code> modality. You can also define a <code>through</code> modality, which is a modality that the <code>source</code> is going to be registered to first, and then the <code>target</code> is going to be registered to the <code>through</code> modality.</p> <p>There are many options available ranging from <code>rigid</code>, <code>affine</code> to <code>non-linear</code> options.</p> <p></p> <p>You can visualise the registration path by opening the <code>registration network</code> widget.</p> <p></p>"},{"location":"apps/elastix.html#export-options","title":"Export options","text":"<p>There are several export options available to you. This includes which images (or attachment modalities) should be transformed and exported.</p> <p></p>"},{"location":"apps/elastix.html#execution","title":"Execution","text":"<p>Registration can be executed directly in the app or via the command-line interface. The command-line interface is more powerful, as it permits batch processing, however, the in-app execution is more user-friendly.</p> <p></p> <p>Tasks that are being registered in the app, go the <code>Tasks queue</code> widget. You can access it from the statusbar at the bottom of the app.</p> <p></p>"},{"location":"apps/elastix.html#project-structure","title":"Project structure","text":"<p>Elastix projects are saved into a <code>&lt;your project name&gt;.wsireg</code> folders that contain several sub-folders that should maintaiance and keeping track of your registration process.</p> <p>The folder normally contains the following sub-folders:</p> <ul> <li>Cache - contains the pre-processed images and masks. You should check this folder when registration fails and see whether the pre-processed images look anything alike.</li> <li>Images - contains the registered images. This folder will contain any <code>registered</code> data including images, GeoJSONs, point data, etc.</li> <li>Logs - contains the logs of the registration process. This can be useful to check what <code>commands</code> were executed on the project.</li> <li>Progress - contains the progress of the registration process. This folder contains miscellaneous files that are used to keep track of the registration process.</li> <li>Transformations - contains the transformation matrices. This folder contains the <code>elastix</code> transformation data that can be used to transform the microscopy images (and any associated data) to the new coordinate system.</li> </ul>"},{"location":"apps/fusion.html","title":"Fusion Preparation App","text":"<p>This app enables export of microscopy data in CSV file format that is compatible with Raf Van de Plas' fusion program. The fusion tool uses a non-standard CSV format which can be troublesome to generate using normal tools.</p>"},{"location":"apps/fusion.html#steps-to-export-images","title":"Steps to export image(s)","text":"<ol> <li>Load your image(s) by drag-and-drop into the window or clicking on the    button. This let's you select images to load.</li> <li>Select the output directory by clicking on the <code>Set output directory</code> button.</li> <li>Click on the <code>Export to CSV</code> button to initiate the output. Progress of the exprt is shown in the <code>progress</code> column.</li> </ol> <p>Warning</p> <pre><code>This app does not have viewer canvas so the images will not be displayed!\n</code></pre>"},{"location":"apps/fusion.html#dialogs-and-widgets","title":"Dialogs and widgets","text":""},{"location":"apps/fusion.html#image-selection","title":"Image selection","text":"<p>Click on the <code>Add/remove dataset...</code> button to open the popup window.</p> <p></p> <ul> <li>Click on <code>Add image</code> button to add new image to the list.</li> <li>Click on the <code>Remove image</code> to remove one or more image from the list.</li> <li>Click on the  to delete the single image and all it's layers.</li> </ul>"},{"location":"apps/merge.html","title":"Merge app","text":"<p>This app let's you merge several files into one.</p> <p></p> <p>You can adjust which channels should be included in the final image by double Left Button clicking on the channel name. The channels will be merged in the order they are listed in the dialog.</p> <p>This opens a new dialog where you can change selct or de-select channels and change their names.</p> <p></p> <p>Click on <code>Accept</code> to save selection</p> <p>Click on <code>Accept</code> to save the selection and close the dialog.</p>"},{"location":"apps/na.html","title":"Not available","text":"<p>Error</p> <pre><code>This app is not currently available.\n</code></pre>"},{"location":"apps/register.html","title":"Registration App","text":"<p>This is a simple image registration tool that can be used instead of napari-imsmicrolink.</p> <p>You should use the napari-wsireg app for automatically registering your microscopy images together, but you can use image2registration to co-register your IMS data with the postIMS-AF.</p> <p>This app defines the <code>Fixed</code> and <code>Moving</code> modalities. As the names suggest, the <code>Fixed</code> modality should normally represent the microscopy modality to which you want to co-register your IMS data. Consequently, the <code>Moving</code> modality is the IMS dataset.</p> <p></p>"},{"location":"apps/register.html#obtaining-transformation-matrix","title":"Obtaining transformation matrix","text":"<ol> <li>Select your <code>Fixed</code> image by clicking on the  button. This will let you select images to load. You can alternatively drag-and-drop images into the canvas.</li> <li>Select the channels you want to immediately display. All channels will be loaded but not all displayed if you've unselected some.</li> <li>Repeat this for the <code>Moving</code> modality.</li> <li>Click on the  icon in the toolbar on the left-hand side (or click 2 on your keyboard to activate the <code>add</code> mode).</li> <li>Select at least 4 points in each image to estimate transformation matrix. After that, you can click in either image and the other will be predicted.</li> <li>Once you are happy with your results. Save them as the <code>i2r.json</code> format which can be used in the viewer app or to transform images and masks.</li> </ol> <p>You can overlay any of the  <code>moving</code> images on the <code>fixed</code> image by selecting an image in the <code>Overlay</code> combobox. You can also toggle the view type between <code>Random</code> image (where we fill-in the image with random values) or <code>Overlay</code> which directly represents the co-registered image.</p> <p></p> <p>Prediction</p> <p>The registration app only requires 4 points to estimate transformation matrix. Once four points have been added to both views, it will start to <code>predict</code> where points might be. For instance, if you add a new point in the <code>Fixed</code> viewer, it will automatically place a point in the <code>Moving</code> viewer. You can then take a look if you are happy with the position and move it to where it should be. The more points you have, the better the predicted transformation will be.</p> <p>Compatibility with <code>napari-imsmicrolink</code></p> <p>If you have previous <code>napari-imsmicrolink</code> registrations, you can load them into <code>image2register</code> by clicking on the <code>Import project</code> button. The output of the <code>napari-imsmicrolink</code> plugin contains information about what images were used, the pixel size and fiducial markers but it is not guaranteed to work with <code>image2register</code> app. The reason for this is that <code>napari-imsmicrolink</code> permits users to rotate and pad their images, however, this information is not retained in the configuration file so we cannot automatically determine this.</p>"},{"location":"apps/register.html#automatic-fiducial-marker-generation","title":"Automatic fiducial marker generation","text":"<p>Since version 0.1.7 it is possible to automatically generate fiducial markers. This is useful when you have a large number of images and you want to quickly establish the transformation matrix between them. To do this, follow this simple guide.</p> <p> </p>      Dialog to automatically generate fiducials (left).     Point that should be found in the `moving` image (right).    <ol> <li>(optional) Click on the <code>Initialize moving image...</code> button to rotate and flip the moving image. This might not be necessary it's sometimes necessary to pre-orient the image if the microscopy image is rotated or flipped.</li> <li>Click on the <code>Generate fiducials</code> button. This will open a new dialog where you can automatically detect fiducial markers in the <code>moving</code> image. </li> <li>You can easily adjust the number of detected fiducials by adjusting the <code>Simplify contours</code> slider. This will remove points that are too close to each other. The smaller the value, the more points will be retained.</li> <li>Once you are satisified with the number of detected markers, click on the <code>Select point in the fixed image</code> button. This will activate the <code>add</code> mode on a temporary points layer in the <code>fixed</code> viewer. You then need to find the corresponding point in the <code>fixed</code> image, and mark it.</li> <li>Once the point was found in the <code>fixed</code> viewer, click on the <code>OK</code> button and the points visible in the <code>moving</code> viewer (found) will be added to the <code>fixed</code> viewer.</li> <li>You now will want to toggle between all the automatically added points and adjust their position to improve the alignment. You can do this very rapidly by clicking on the 3 key on your keyboard (which activates the <code>move</code> mode), and then A and D keys to toggle between points in both images.</li> </ol> <p>Warning</p> <p>This option is disabled if there are any points in the <code>moving</code> viewer. You will need to remove them to enable the automatic fiducial marker generation.</p>"},{"location":"apps/register.html#dialogs-and-widgets","title":"Dialogs and widgets","text":""},{"location":"apps/register.html#viewer-toolbar","title":"Viewer toolbar","text":"<p>To the left of each canvas there is a toolbar with a number of widgets.</p> <ul> <li> - this button opens up <code>Layer controls</code> for this particular view. See layer-controls</li> <li> - this button moves the points layer to the top. This is sometimes necessary. Use if you can't see the points you are adding!</li> <li> - activate the <code>zoom</code> mode in the viewer. You can also activate it by pressing 1 on your keyboard or temporarily enable it by pressing Space on your keyboard if any of the other modes is active.</li> <li> - activate the <code>add</code> mode in the viewer. This mode let's you add fiducial markers to the image. You can also activate it by pressing 2 on your keyboard.</li> <li> - activate the <code>move</code> mode in the viewer. This mode lets you select and move the fiducial markers to a new position. Each time you do this, a new transformation matrix is computed. You can also activate it by pressing 3 on your keyboard.</li> <li> - remove the last added point.</li> <li> - remove all currently selected points (you will be asked to confirm).</li> <li> - remove all points (you will be asked to confirm).</li> </ul>"},{"location":"apps/register.html#image-selection","title":"Image selection","text":"<p>Click on the <code>Add/remove dataset...</code> button to open the popup window.</p> <p></p> <ul> <li>Click on <code>Add image</code> button to add new image to the list.</li> <li>Click on the <code>Remove image</code> to remove one or more image from the list.</li> <li>Click on the  to delete the single image and all it's layers.</li> </ul>"},{"location":"apps/register.html#channel-selection","title":"Channel selection","text":"<p>Click on the <code>Select channels...</code> button to open the popup window.</p> <p></p> <ul> <li>Check/uncheck items in the table to toggle the visibility of an image layer.</li> <li>You can click on the header of the first column (one without any label) to quickly toggle the visibility of all layers.</li> </ul>"},{"location":"apps/register.html#initial-transformation","title":"Initial transformation","text":"<p>In some situations, you might have a microscopy image that is rotated or flipped. While it's possible to manually add points in the correct order, it's far easier to 'initialize' the transformation matrix by clicking on the <code>Initialize moving image...</code> button. This opens a dialog which let's you <code>rotate</code> and <code>flip</code> the moving image.</p> <p></p>"},{"location":"apps/register.html#fiducials-table","title":"Fiducials table","text":"<p>Click on the <code>Show fiducials table...</code> button to open the popup window.</p> <p></p> <ul> <li>Double-click with the Left Button on a row to select a pair of points and zoom-in on them in each canvas. You can then easily adjust their position to improve the alignment of layers.</li> <li>Press Del or Backspace on your keyboard while selecting a point to remove it from the table.</li> </ul> <p>Warning</p> <p>Once point is deleted from the table, it cannot be recovered.</p>"},{"location":"apps/valis.html","title":"Valis app","text":"<p>This app performs Valis registration. It is an excellent whole-slide registration workflow that performs better in non-linear transformations than the elastix app.</p> <p></p>"},{"location":"apps/valis.html#simplified-workflow-see-below-for-more-information","title":"Simplified workflow (see below for more information)","text":"<ol> <li>Load the images you wish to co-register.</li> <li>Adjust their names, parameters.</li> <li>Establish the registration paths.</li> <li>Adjust the export options.</li> <li>Execute the registration.</li> </ol>"},{"location":"apps/valis.html#live-preview","title":"Live preview","text":"<p>You can immediately preview how your images will look like after before registration. This is extremely useful since it's important that images used for registration highlight their features. </p> <p>To enable this, make sure to click on the <code>Use preview image</code> checkbox.</p>"},{"location":"apps/valis.html#pre-processing","title":"Pre-processing","text":"<p>In the top-right corner of the app, you can find the list of image modalities that will be registered. You can adjust the pre-processing parameters for each modality by clicking on the <code>widget</code> or on the <code>Pre-process...</code> button.</p> <p>The widget also allows you to adjust the <code>name</code> of the modality, spatial resolution (if it was read incorrectly from the file metadata) and the <code>color</code> of the image.</p> <p>There are a number of pre-processing parameters that can be adjusted to improve the registration process.</p> <ul> <li>Intensity - adjusts how the intensity of the image is transformed.<ul> <li>Multi-channel images must be turned into a single-channel image, usually done by using <code>maximum intensity projection</code>.</li> <li>You can improve the contrast of the image channels by using <code>histogram equalization</code> or <code>contrast enhancement</code> (or both).</li> <li>if your image is <code>light or dark background</code> (e.g. H&amp;E) then you must <code>invert</code> the intensities</li> </ul> </li> </ul>"},{"location":"apps/valis.html#registration-options","title":"Registration options","text":"<p>Valis works very differently to elastix in that it doesn't require you to specify the registration paths. Instead it uses automatically detected fiducial markers between pairs of images to establish the image transformations.</p> <p>It normally works in three steps: - low-resolution rigid transformation - this is to roughtly align the images to each other - low-resolution non-linear transformation - this is to refine the alignment - high-resolution non-linear transformation - this is to get the final alignment</p> <p>You can specify a <code>reference</code> which will be the image to which all other images are registered to. If reference is left empty (or set to <code>None</code>) then then reference is automatically determined based on image similarity.</p> <p>You can specify the <code>Feature detector</code> and <code>Feature matcher</code> to be used. These are the algorithms that will be used to detect and match the fiducial markers between images.  The <code>gms</code> feature matcher often fails to work properly, so it's recommended to use <code>ransac</code> instead.</p> <p>You can optioanlly disable the <code>non-rigid</code> and <code>micro</code> registration. These are the two last steps of the registration process. Disabling them will speed-up the registration process, but might result in a less accurate registration.</p> <p>The <code>fraction</code> parameter controls what fraction of the image will be used for the final registration. If this value is large, it will take much longer, however, it might result in a better registration.</p> <p></p>"},{"location":"apps/valis.html#export-options","title":"Export options","text":"<p>There are several export options available to you. This includes which images (or attachment modalities) should be transformed and exported.</p> <p></p>"},{"location":"apps/valis.html#execution","title":"Execution","text":"<p>Registration can be executed directly in the app or via the command-line interface. The command-line interface is more powerful, as it permits batch processing, however, the in-app execution is more user-friendly.</p> <p></p> <p>Tasks that are being registered in the app, go the <code>Tasks queue</code> widget. You can access it from the statusbar at the bottom of the app.</p> <p></p>"},{"location":"apps/viewer.html","title":"Viewer app","text":"<p>This app can be used to overlay multiple images together. You can optionally display images with different registration (transformation) information, although, all the images must have ONE common image.</p> <p>For instance, you have the following images:</p> <ul> <li>H&amp;E or PAS stain</li> <li>preIMS AF</li> <li>IMS</li> <li>postIMS AF</li> <li>CODEX or Xenium data</li> </ul> <p>Normally you would co-register your H&amp;E, preIMS and postIMS AF together but for some reason you didn't, but you still wanted to overlay them. In this case, you would perform manual registration using the register app which produces the <code>i2r.json</code> configuration file.</p> <p> </p> Overlay of H&amp;E, pre-codex AF and nuclear markers detected in CODEX."},{"location":"apps/viewer.html#steps-to-overlay-multiple-images-together","title":"Steps to overlay multiple images together","text":"<ol> <li>Select your images by clicking on the <code>Add/remove dataset...</code> button. This opens up a new popup window where you can <code>Add</code> and <code>Remove</code> images. Make sure to also specify the pixel size/resolution in the table. You can do so by double-clicking Left Button in the field and entering the value. </li> <li>Select the channels that you want to immediately display. All channels will be loaded BUT not all of them will be displayed immediately. You can show/hide them by using the <code>layer controls</code> and clicking on the / icon.</li> <li>(optional) If the image you are displaying needs to be <code>transformed</code> to a new coordinate system (e.g. IMS to H&amp;E), click on the <code>Select transformation</code> button. This opens a new popup window where you can load and select transformations for each image. To add a new transformation from the <code>i2r.json</code> file, click on the  icon.</li> <li>Adjust the visuals of each of the layers you wish to see in the <code>Layer controls</code> section.</li> <li>You can export the information about currently loaded images to a <code>i2v.json</code> project file by clickin on the <code>Export project...</code> button. These can be re-loaded at later stage by using the <code>Import project...</code> button.</li> </ol>"},{"location":"apps/viewer.html#scale-and-image-resolution","title":"Scale and image resolution","text":"<p>It is essential that the <code>pixel size</code> value in the <code>Datasets</code> table is correct. Some files, such as <code>GeoJSONs</code> are often exported in the <code>pixel coordinates</code> (without multiplying by the pixel size of the image, meaning that overlaying them on the image will result in an improper scale if the image has been transformed by applying it's scale). </p> <p>It's very easy to adjust the <code>scale</code> of any layer by changing the value of the <code>pixel size</code> in the table.</p> <p> </p> Scale is important. Make sure to adjust the `pixel size` of all overlaid datasets or some of them will not look correct."},{"location":"apps/viewer.html#dialogs-and-widgets","title":"Dialogs and widgets","text":""},{"location":"apps/viewer.html#image-selection","title":"Image selection","text":"<p>Click on the <code>Add/remove dataset...</code> button to open the popup window.</p> <p></p> <ul> <li>Double-click Left Button on the value in the <code>pixel size (um)</code> to adjust the spatial resolution of the image (and all it's channels).</li> <li>Click on the  to delete the single image and all it's layers.</li> </ul>"},{"location":"apps/viewer.html#image-transformation","title":"Image transformation","text":"<p>Click on the <code>Select transformation</code> button to open the popup window.</p> <p></p> <ul> <li>Click on the  to load new transformation information from the <code>i2r.json</code> or <code>i2r.toml</code> file. Once loaded, the transformation will appear in the combobox to the left of the button.</li> <li>Check/uncheck items in the table to select which images should to current transformation be applied to. Click on the <code>Apply to selected</code> button to apply it. Changes will be immediately reflected in the image canvas.</li> <li>You can always reset the transformation bu applying the <code>Identity matrix</code> option.</li> </ul> <p>Warning</p> <p>If the pixel size/resolution information is incorrect, you might get unexpected results.</p>"},{"location":"apps/viewer.html#scalebar","title":"Scalebar","text":"<p>You can easily display scalebar on your image by clicking on the <code>Tools &gt; Show scale bar controls...</code> or Ctrl+S on your keyboard.</p> <p></p> <ul> <li>You can change its location (any of the four corners of the image).</li> <li>You can change the units (No units, micrometers or pixels.)</li> </ul> <p>Note</p> <p>For the 'micrometers' units to work properly, you must also specify the pixel size in the image table.</p>"},{"location":"dialog/channel-selection.html","title":"Channel selection","text":"<p>Webpage does not exist yet.</p>"},{"location":"dialog/dataset-selection.html","title":"Dataset selection","text":"<p>Webpage does not exist yet.</p>"},{"location":"dialog/export-masks.html","title":"Export masks","text":"<p>Webpage does not exist yet.</p>"},{"location":"dialog/fiducials-table.html","title":"Fiducials table","text":"<p>Webpage does not exist yet.</p>"},{"location":"dialog/generate-fiducials.html","title":"Generate fiducials","text":"<p>Webpage does not exist yet.</p>"},{"location":"dialog/initial-transform.html","title":"Initial transformation","text":"<p>Webpage does not exist yet.</p>"},{"location":"dialog/transformation-selection.html","title":"Transformation selection","text":"<p>Webpage does not exist yet.</p>"}]}