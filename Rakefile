task :default do
  sh "ark ls > list.txt"
  sh "ark package -o dist/patchboard-browser.js"
  sh "ls -lh dist/patchboard-browser.js"
end