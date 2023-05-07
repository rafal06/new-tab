# New Tab
Alternative new tab page for your browser

![screenshot](https://media.discordapp.net/attachments/969317854635769929/1104707480812011621/image.png)

## To do
- [ ] ability to change shortcuts
- [ ] ability to change title text
- [ ] ability to change the search provider
- [ ] ability to change background image

## Development
Assuming you have Node.js installed, and you installed project dependencies with `npm install`, run the following command to start the dev server:

```bash
npm run dev
```

## Building
To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Extension
You can build it as a browser extension by running the following command:

```sh
npm run webext build
```

The resulting build artifact will be in a web-ext-artifacts directory.

<details>
<summary>How to install it in Firefox</summary>

1. Click the hamburger menu and select "Add-ons and themes"
<img src="https://media.discordapp.net/attachments/969317854635769929/1104704897343045722/1.png">

2. Click the settings icon and select "Debug Add-ons"
<img src="https://media.discordapp.net/attachments/969317854635769929/1104704897628262451/2.png">

3. Click "Load Temporary Add-on..." and select the build artifact

The extension will be installed until you restart Firefox
</details>

## Notices

YouTube, GitHub, MDN and Downdetector are trademarks of the appropriate companies.

---

The search icon is made by Microsoft as part of the [Fluent System Icons](https://github.com/microsoft/fluentui-system-icons) collection and is licensed under the MIT License.
