module.exports = {
  name: 'code-challenge-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/code-challenge-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
