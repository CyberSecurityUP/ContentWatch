# ContentWatch

**ContentWatch** is a Chrome extension designed to help users identify and manage inappropriate content on web pages. This extension provides real-time alerts if offensive content is detected, ensuring a safer browsing experience.

## Features

- **Real-Time Alerts**: Automatically detects and alerts users about potentially inappropriate content on web pages.
- **User Preferences**: Allows users to opt-out of future alerts for specific tabs using a simple confirmation dialog.
- **Manual Check**: Includes a button to manually check the current page for offensive content.

## Installation

1. **Download**: Clone or download the repository from GitHub.
2. **Open Chrome**: Navigate to `chrome://extensions/` in your Chrome browser.
3. **Enable Developer Mode**: Toggle the switch in the top-right corner to enable Developer Mode.
4. **Load Extension**: Click on "Load unpacked" and select the folder where you saved the extension files.

## Usage

Once installed, **ContentWatch** will automatically scan the content of each page you visit for offensive words as defined in the extension's settings. If any offensive content is detected, a confirmation dialog will appear.

- **Automatic Alerts**: Alerts are shown when offensive content is detected. You can choose to hide future alerts for the current tab.
- **Manual Check**: Click the extension icon and use the "Check This Page" button to manually trigger a content scan.

## Configuration

- **Offensive Words**: Customize the list of offensive words in the `contentScript.js` file under the `offensiveWords` array.

```javascript
const offensiveWords = ['example1', 'example2']; // Add your list of offensive words here
