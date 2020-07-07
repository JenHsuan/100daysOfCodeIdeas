from pynpm import NPMPackage
from os import listdir
pkg = NPMPackage('ideas/package.json')
pkg.install()
pkg.run_script('build')