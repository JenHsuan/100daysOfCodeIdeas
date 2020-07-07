from pynpm import NPMPackage
from os import listdir, walk
for i,j,y in walk('.'):
    print(i) 

pkg = NPMPackage('./ideas/package.json')
pkg.run_script('build')