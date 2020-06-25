module.exports = {
  name: 'code-challenge-shared-header',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/code-challenge/shared/header',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
