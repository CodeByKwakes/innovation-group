module.exports = {
  name: 'code-challenge-feature-product',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/code-challenge/feature/product',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
