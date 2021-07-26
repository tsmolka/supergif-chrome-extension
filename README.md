# supergif-chrome-extension
This Chrome extension bundles SuperGIF class from [libgif-js](https://github.com/buzzfeed/libgif-js) and brings basic play controls for animated gifs into your browser.

See SuperGIF in [Chrome Web Store](https://chrome.google.com/webstore/detail/supergif/mjdfacapckkijfkjopiadlgnooegojne/).

## Description

Main purpose of this extension is to improve user experience when watching long animated gifs in a browser. Typical user is someone who watches screen capture converted into animated gif and wishes to pause the animation to focus on some detail on currently captured screen. This rather trivial task is not really straightforward as there are no pause/resume controls built-in.

This extension adds "SuperGIF" context menu to GIF images on the currently visited site. When triggered, image is parsed into individual frames and replaced with canvas that plays the animation frame by frame. User can then pause/resume or seek by clicking on the canvas.

For a simple example, install the extension and test it on this animated gif: https://github.com/buzzfeed/libgif-js/blob/master/example_gifs/rub_test.gif .

Under the hood this extension bundles SuperGIF class from [libgif-js](https://github.com/buzzfeed/libgif-js) project and adds little bit of custom logic to registered event handlers.

## Demo

![Demo](/docs/demo.gif)

## License

[MIT License](./LICENSE)
