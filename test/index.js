test = require('tape')
nixt = require('nixt')
path = require('path')

npmPath = require('npm-path').setSync()
stubPath = path.join(__dirname, 'stubs')
testDir = __dirname

cmdRunner = function() {
  return nixt()
    .env('PATH', stubPath + ':' + npmPath)
    .env('HOME', testDir)
    .env('PROJECTS', testDir)
}

test('it clones a pre-existing repo into a new directory under $PROJECTS', function (t) {
  t.plan(1)

  cmdRunner()
    .run('project stoopid/yup')
    .stdout('ran hub with: clone stoopid/yup')
    .end(t.end)
})

test('it creates a new repo into a new directory under $PROJECTS', function (t) {
  t.plan(1)

  cmdRunner()
    .env('FAIL_CLONE', 'true')
    .run('project stoopid/yup')
    .stdout([
      'ran hub with: clone stoopid/yup',
      'ran hub with: init',
      'ran hub with: create stoopid/yup'
    ].join('\n'))
    .rmdir('test/yup')
    .end(t.end)
})
