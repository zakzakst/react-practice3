// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "select",
    name: "file_type",
    message: "Select file type",
    choices: ["page", "component"],
  },
  {
    type: "input",
    name: "name",
    message: "Input file name",
  },
];

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: "select",
          name: "file_type",
          message: "Select file type",
          choices: ["page", "component"],
        },
      ])
      .then(({ file_type }) => {
        // ページ関連のファイルを出力する場合の質問
        if (file_type === "page") {
          return inquirer
            .prompt([
              {
                type: "input",
                name: "page_dir",
                message: "input page directory ( ex: /path/to/page )",
              },
              {
                type: "input",
                name: "page_name",
                message: "input page name ( ex: index )",
              },
            ])
            .then(({ page_dir, page_name }) => {
              return { file_type, dir: page_dir, name: page_name };
            });
        }
        // コンポーネント関連のファイルを出力する場合の質問
        if (file_type === "component") {
          return inquirer
            .prompt([
              {
                type: "select",
                name: "component_type",
                message: "Select component type",
                choices: ["atoms", "molecules", "organisms", "templates"],
              },
              {
                type: "input",
                name: "component_name",
                message: "input component name ( ex: card )",
              },
            ])
            .then(({ component_type, component_name }) => {
              let component_dir = "";
              switch (component_type) {
                case "atoms":
                  component_dir = "at";
                  break;
                case "molecules":
                  component_dir = "mo";
                  break;
                case "organisms":
                  component_dir = "or";
                  break;
                case "templates":
                  component_dir = "tm";
                  break;
                default:
                  component_dir = "";
              }
              return { file_type, dir: component_dir, name: component_name };
            });
        }
      });
  },
};
