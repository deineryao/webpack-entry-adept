#!/bin/sh
#check out a fresh copy of jQuery
git clone git://github.com/jquery/jquery.git $1
#copy the dummy test case file in
cp $2.html $1/index.html
#build a copy of the jquery test suite
cd $1 && make
