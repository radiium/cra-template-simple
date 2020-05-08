module.exports = function (plop) {
    plop.setGenerator('class-component', {
        description: 'generate react class component',
        prompts: [{
            type: 'input',
            name: 'name'
        }],
        actions: [{
            type: 'add',
            templateFile: 'plop-templates/style.scss.hbs',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss'
        },
        {
            type: 'add',
            templateFile: 'plop-templates/class-component.tsx.hbs',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx'
        }]
    });

    plop.setGenerator('functional-component', {
        description: 'generate react functional component',
        prompts: [{
            type: 'input',
            name: 'name'
        }],
        actions: [{
            type: 'add',
            templateFile: 'plop-templates/style.scss.hbs',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.scss'
        },
        {
            type: 'add',
            templateFile: 'plop-templates/functional-component.tsx.hbs',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx'
        }]
    });

    plop.setGenerator('context', {
        description: 'generate react context',
        prompts: [{
            type: 'input',
            name: 'name'
        }],
        actions: [{
            type: 'add',
            templateFile: 'plop-templates/context.tsx.hbs',
            path: 'src/contexts/{{pascalCase name}}Store.tsx'
        }]
    });
};
