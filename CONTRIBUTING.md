
# Contributing to Codepal

Thank you for considering contributing to Codepal! Your contributions are essential in helping us build a comprehensive platform for beginner-friendly coding tutorials. This guide will provide you with clear instructions on how to contribute to this open-source project.

## Getting Started

1. **Fork the Repository:** Start by forking the Codepal repository to your GitHub account. This will create a copy of the project in your own GitHub profile.

2. **Clone the Repository:** Clone your forked repository to your local machine using the following command. Replace `your-username` with your actual GitHub username.

   ```bash
   git clone https://github.com/your-username/codepal.git
   ```

3. **Create a Branch:** Create a new branch for your contribution. Be sure to choose a meaningful and descriptive branch name that relates to the changes you intend to make.

   ```bash
   git checkout -b chapter/your-chapter-name
   ```

## Contribution Guidelines

### Modifying Existing Tutorials

1. Locate the relevant JSON file for the tutorial you want to modify. JSON files are organized by topic, and each topic has its own JSON file.

2. Edit the JSON file to add, modify, or enhance the tutorial content. Ensure that your changes follow the existing JSON structure. **Do not change the structure of the file; only append or modify data.**

### Adding New Tutorials

1. To create a new chapter or topic, create a new JSON file for it. For example, if you want to add tutorials for web development, create a file named `WEB_DEVELOPMENT.json`.

2. Populate the newly created JSON file with the tutorial details, following the predefined structure for tutorial data.

### Frontend Development

1. If you wish to contribute to the website's frontend, you can work on the design and features provided in the `/designs` folder. You may also propose new design ideas.

2. If you are contributing to the frontend, make sure that data from json is properly.

.3 [figma](https://www.figma.com/file/Ytjhr2hushiuM5ZblRWjrz/NN_Hacktober?type=design&node-id=0%3A1&mode=design&t=svBHSaUF1Zl1HTGw-1)

### Creating a Pull Request (PR)

1. pull the changes and resolve the conglicts if any
   ```bash
      git pull origin main
      git merge main
   ```

2. After making your changes in your branch, commit your changes with clear and concise commit messages.

   ```bash
   git commit -m "Add new tutorial for JavaScript basics."
   ```

3. Push your changes to your GitHub repository.

   ```bash
   git push origin feature/your-feature-name
   ```

3. Create a pull request (PR) from your branch to the main Codepal repository. Ensure that your PR includes a clear description of your changes and any relevant tags.

4. Wait for your PR to be reviewed. Make any necessary changes based on the feedback provided by the maintainers.

5. Once your PR is approved, it will be merged into the main branch, and your contribution will become a part of Codepal.

## Code Style Guidelines

Please maintain clean and well-documented code. Ensure that your contributions align with the project's coding standards and best practices.


Thank you for contributing to Codepal and helping others on their coding journey!