module.exports = {
  name: 'code-challenge-ui-product-card',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/code-challenge/ui/product-card',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
