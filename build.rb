require 'ruby2js/filter/esm'

output = File.open( "./index.js","w" )
output << Ruby2JS.convert(File.read("./index.rb"))
output.close