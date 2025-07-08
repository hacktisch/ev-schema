module.exports = [
  { label: 'Page title', type: 'text', source: 'title' },
  require('../groups/pathReference.js'),

  {
    source: 'reviews',
    type: 'array',
    sub: [
      {
        source: 'author',
        label: 'Author',
        type: 'text',
      },
      {
        source: 'place',
        label: 'Place',
        type: 'text',
      },
      {
        source: 'rating',
        label: 'Rating',
        type: 'slider',
        min: 0,
        max: 100,
        step: 10,
        factor: 0.05,
      },
      {
        source: 'summary',
        label: 'Your experience in one sentence',
        type: 'text',
      },

      {
        source: 'recommend',
        label: 'Do you recommend Evenses?',
        type: 'text',
      },
      {
        source: 'text',
        label: 'Text',
        type: 'longtext',
        multiline: true,
      },
    ],
  },

  {
    source: 'cases',
    label: 'Cases',
    type: 'array',
    sub: [
      {
        label: 'Logo',
        help: 'Only for cases for companies with logo to be shown in the logo overview',
        source: 'logo',
        type: 'image',
        accept: { 'image/png': true },
      },

      {
        source: 'title',
        type: 'text',
        label: 'Title',
      },
      {
        source: 'body',
        type: 'markdown',
        label: 'Description',
      },
      {
        source: 'slides',
        label: 'Images and videos',
        type: 'array',
        mode: 'mediaplayer',
        xor: true,
        sub: [
          {
            source: 'url',
            label: 'Youtube URL',
            type: 'text',
          },
          {
            source: 'image',
            label: 'Image',
            type: 'image',
            accept: {
              'image/jpeg': true,
              'image/webp': 'jpg',
              'image/png': 'jpg',
            },
            /*transforms: {
                            _original: {
                                width: 700,
                                height: 470
                            }
                        }*/
          },
        ],
      },
    ],
  },
  ...require('../groups/metaTags.js'),
];

