from pynpm import NPMPackage
pkg = NPMPackage('./ideas/package.json')
pkg.run_script('build')