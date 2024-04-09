<div align="center">

# Progressive Blur Figma Plugin

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE.md)
[![Open Issues](https://img.shields.io/github/issues/FormalSnake/ProgressiveBlur.svg)](https://github.com/FormalSnake/ProgressiveBlur)

This plugin allows you to configure progressive blur effects in Figma.

</div>

<details>
<summary>Showcase</summary>
<img width="1440" alt="imageShowcase" src="https://github.com/FormalSnake/ProgressiveBlur/blob/main/assets/imageShowcase.png?raw=true">
</details>

> [!CAUTION]
> Based on how this system works, your Figma file might lag a lot. This is because the system creates a bunch of rectangles.

## Installation

You get this plugin through the [Figma Community](https://www.figma.com/community/plugin/1356736586164762457/progressive-blur).

## Development

> [!NOTE]
> There is a Figma plugin limitation that does not allow for the code to be organized better. If you know a workaround it is always welcome to create a pull request.

To make changes to the plugin:

1. Learn how to create a plugin [here](https://www.figma.com/plugin-docs/plugin-quickstart-guide/).
2. Install [Bun](https://bun.sh/) for fast JavaScript runtime.
3. Run `bun install` to install dependencies.
4. Make your changes to the code.
5. To build the plugin and watch for changes, run:

   ```sh
   bun run build --watch
   ```

## Usage

To use the plugin in Figma:

1.  Open the Figma file where you want to apply the blur effects.
2.  Go to `Plugins > Development > Progressive Blur`.
3.  Use the UI to configure the blur effects.
4.  Click `Generate Blur` to apply the effects to your Figma design.

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

© 2024 FormalSnake. All rights reserved.
