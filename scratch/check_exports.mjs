import * as heroui from '@heroui/react';

const componentsToCheck = [
    'TextField',
    'Label',
    'FieldError',
    'Description',
    'Form',
    'Surface',
    'Separator'
];

componentsToCheck.forEach(comp => {
    console.log(`${comp}:`, typeof heroui[comp], heroui[comp] ? 'Exists' : 'UNDEFINED');
});
