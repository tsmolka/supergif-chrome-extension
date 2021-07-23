chrome.runtime.onInstalled.addListener(() => {
  // Create "SuperGIF" context menu for gif images
  chrome.contextMenus.create({
    id: 'supergif',
    title: 'SuperGIF',
    type: 'normal',
    contexts: [
      'image'
    ],
    targetUrlPatterns: [
      // Matching patterns seem to be case sensitive :(
      '*://*/*.gif',
      '*://*/*.GIF'
    ]
  });
});

// Handle clicks on "SuperGIF" context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.mediaType !== 'image') {
    console.error(`Media type "${info.mediaType}" is not supported.`);
    return;
  }

  // Load supergif.js in target frame
  chrome.scripting.executeScript(
    {
      target: {
        tabId: tab.id,
        frameIds: [
          info.frameId
        ]
      },
      files: ['supergif.js'],
    }, (results) => {
      // Send srcUrl to supergif via message and trigger transformation
      chrome.tabs.sendMessage(tab.id, {
        srcUrl: info.srcUrl
      });
    }
  );

});
