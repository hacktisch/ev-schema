const { menus } = require('./structure');

module.exports = [
  {
    source: 'root',
    type: 'select',
    label: 'Tree',
    choices: menus,

    validate: ['required'],
  },
  {
    source: 'text',
    type: 'text',
    label: 'Shown text',
    validate: ['required'],
  },
  {
    source: 'path_id',
    type: 'reference',
    label: 'Path',
    filter: {
      weight: 0,
    },
    reference: {
      resource: 'path',
      optionText: 'path',
      inputType: 'autocomplete',
    },
    props: {
      sort: { field: 'length(path)', order: 'ASC' },
    },
   // validate: ['required'],
  },
  {
    source: 'parent',
    type: 'reference',
    label: 'Parent',
    reference: {
      resource: 'tree',
      optionText: 'text',
    },
    props: {
      resettable: true,
      sort: { field: 'weight', order: 'ASC' },
    },
  },
  {
    source: 'weight',
    type: 'number',
    validate: ['required'],
    props: {
      defaultValue: 0,
    },
  },
  {
    source: 'icon',
    type: 'reference',
    label: 'Icon',
    reference: {
      resource: 'icon',
      inputType: 'autocomplete',
      images: true,
    },
  },
  {
    source: 'priceWarn',
    label: 'Show price warning for products in this category',
    type: 'boolean',
  },
  require('./groups/inherit.js'),
];

