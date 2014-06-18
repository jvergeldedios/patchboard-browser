task :default do
  ark = "./node_modules/.bin/ark"
  sh "#{ark} package -o dist/patchboard-browser.js"
  sh "uglifyjs dist/patchboard-browser.js -o dist/patchboard-browser.min.js"
end