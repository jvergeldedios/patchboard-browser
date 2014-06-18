task :default do
  ark = "./node_modules/.bin/ark"
  uglify = "./node_modules/.bin/uglifyjs"
  sh "#{ark} package -o dist/patchboard-browser.js"
  sh "#{uglify} dist/patchboard-browser.js -o dist/patchboard-browser.min.js"
end