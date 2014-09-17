var global = (function() {

  var base64Decode = function(string) {
    return window.atob(string);
  };
  
  return {
    filesystem: {
      root: {"package.json":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-13T21:46:08.000Z","mtime":"2014-09-17T18:24:34.000Z","size":349,"type":"file"},"__ref":"2b51f55efdc931b4a6c6db19395968c0"},"application.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-13T21:48:06.000Z","mtime":"2014-06-16T18:44:28.000Z","size":44,"type":"file"},"__ref":"bb08aeaf8bdeaa025f8b79c1ba5a6b28"},"node_modules":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:47.000Z","mtime":"2014-09-17T18:24:47.000Z","size":204,"type":"directory"},"patchboard-js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":204,"type":"directory"},"package.json":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":1310,"type":"file"},"__ref":"adc5ef8e601d2f030190103380a5c418"},"node_modules":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":238,"type":"directory"},"evie":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":170,"type":"directory"},"evie.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-06-14T00:03:47.000Z","size":4181,"type":"file"},"__ref":"2530baa9593fdd82077ce6de85819fb9"},"package.json":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":1132,"type":"file"},"__ref":"08271abbd7383bb51cdd97e1e5d691ed"}},"fairmont":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":238,"type":"directory"},"lib":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":340,"type":"directory"},"array.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":1325,"type":"file"},"__ref":"d27e7258dc1862a8972a243d75de1ce2"},"assert.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":990,"type":"file"},"__ref":"cd8c8e4248cbd8045f01d93af560931f"},"crypto.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":402,"type":"file"},"__ref":"9599a58d8360b8dc160dce2ae489711e"},"fs.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":1189,"type":"file"},"__ref":"24c56210341da4fe8d9afd004eec182f"},"index.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":1276,"type":"file"},"__ref":"82c5bdc3e9c3b8443aa0ff355b20ff04"},"object.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":2663,"type":"file"},"__ref":"747f17ffc949cd6d83468b9498f74adb"},"string.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":1390,"type":"file"},"__ref":"41ba13a37c8e1123c1ebcffe37652e52"},"type.js":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-01T17:42:10.000Z","size":757,"type":"file"},"__ref":"a22765138651ec9a7ea108cac78bff85"}},"package.json":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":1513,"type":"file"},"__ref":"f8d5455b785ad059a06697b9407864d4"},"src":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":340,"type":"directory"},"array.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:54:54.000Z","size":1594,"type":"file"},"__ref":"c0a73e6d6931e1202ffdfd5566803616"},"assert.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:54:22.000Z","size":517,"type":"file"},"__ref":"341c7aeaed1f5c684131c62a8a17c581"},"crypto.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:53:42.000Z","size":511,"type":"file"},"__ref":"7787fd435b2ab7fd8ad94b9817e0bb83"},"fs.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:54:13.000Z","size":2076,"type":"file"},"__ref":"38dca1ac207353286c4133f680ae08e6"},"index.coffee":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:56:21.000Z","size":1794,"type":"file"},"__ref":"da8093d1d1d3046e3ee999c0a7d830ab"},"object.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:24:48.000Z","size":2284,"type":"file"},"__ref":"677d54885124243555d9ff4009cbb027"},"string.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T06:01:17.000Z","size":1987,"type":"file"},"__ref":"0c72dc939e9b74cbebcccc6cdc786335"},"type.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T06:02:45.000Z","size":979,"type":"file"},"__ref":"b97f1924baacd876235530b52d089e30"}},"test.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-05-28T05:50:30.000Z","size":1244,"type":"file"},"__ref":"71f8829ad5300b950b2a18a4f5e22fc3"}},"jsck":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:57.000Z","mtime":"2014-06-18T20:59:57.000Z","size":204,"type":"directory"},"lib":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":204,"type":"directory"},"draft3":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":306,"type":"directory"},"arrays.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":2892,"type":"file"},"__ref":"b0454bbaecd2c50735f97b03280b9285"},"attributes.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":916,"type":"file"},"__ref":"5c400ce8cc523a0445906026b28a8654"},"comparison.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":1570,"type":"file"},"__ref":"b6ed64f99f59aca97e62bac5ea8885ce"},"numeric.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":1480,"type":"file"},"__ref":"0577f2eabdad74bf4965b5b667a00463"},"objects.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":6235,"type":"file"},"__ref":"609fc7c924bb8d0357f2cc2f1b90d87f"},"strings.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":4246,"type":"file"},"__ref":"0bcb84aa4149b90f14b7837fee071e66"},"type.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":3648,"type":"file"},"__ref":"f00f3da0dfcc5edf6f67212dd15b1f13"}},"draft3.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":11844,"type":"file"},"__ref":"2d4103bff67fa1a99ce7c3e69abe120e"},"index.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":87,"type":"file"},"__ref":"3bb228a9f0315ca34fa56350046e7d89"},"uri.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-13T18:41:28.000Z","size":775,"type":"file"},"__ref":"e04f7ebdcfb9b101cdeec3adcff8500c"}},"node_modules":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":102,"type":"directory"},"deap":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":374,"type":"directory"},"index.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-03-21T03:07:24.000Z","size":307,"type":"file"},"__ref":"6447cf720a085928a1cdd64e0fb5ef34"},"lib":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":136,"type":"directory"},"deap.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-03-21T03:55:47.000Z","size":2585,"type":"file"},"__ref":"e29b3a1cdea6fad60c14985bbb438e39"},"typeof.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2013-05-07T00:50:02.000Z","size":491,"type":"file"},"__ref":"e06990ed80036013bdbc22008581eb04"}},"package.json":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-09-17T18:24:46.000Z","size":1864,"type":"file"},"__ref":"be3c506ee8dc3624c61f414fa2de36e6"},"shallow.js":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-09-17T18:24:46.000Z","mtime":"2014-03-21T03:07:24.000Z","size":206,"type":"file"},"__ref":"aa52bf0246ac9706bfbbedbfdf306cf6"}}},"package.json":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":1340,"type":"file"},"__ref":"94588e522e310163e8cc1354ea38b9f8"}}},"src":{"__stat":{"atime":"2014-09-17T18:28:15.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:59:56.000Z","size":238,"type":"directory"},"action.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-28T20:02:53.000Z","size":3578,"type":"file"},"__ref":"36ca37817bdc9c1a5fd549a8c3c88b37"},"api.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-14T01:24:39.000Z","size":4271,"type":"file"},"__ref":"9008cb802dd4e9cb3efea51b7966e4ec"},"client.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-28T20:07:51.000Z","size":3759,"type":"file"},"__ref":"0a2349ef82f9b98a105186e3b514490a"},"request.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-06-18T20:44:52.000Z","size":3913,"type":"file"},"__ref":"45c85f4b833e42cee72458133318b91d"},"schema_manager.coffee":{"__stat":{"atime":"2014-09-17T18:28:16.000Z","ctime":"2014-06-18T20:59:56.000Z","mtime":"2014-02-06T19:44:16.000Z","size":527,"type":"file"},"__ref":"208a52b4693a2e85d863f928eb8a377d"}}}}},
      content: {"2b51f55efdc931b4a6c6db19395968c0":"ewogICJuYW1lIjogInBhdGNoYm9hcmQtYnJvd3NlciIsCiAgInZlcnNpb24iOiAiMC4yLjAiLAogICJkZXNjcmlwdGlvbiI6ICJQYXRjaGJvYXJkIGNsaWVudCBmb3IgdGhlIGJyb3dzZXIiLAogICJtYWluIjogImFwcGxpY2F0aW9uLmNvZmZlZSIsCiAgInJlcG9zaXRvcnkiOiAiIiwKICAiYXV0aG9yIjogIkp1bGlhbiBWZXJnZWwgZGUgRGlvcyIsCiAgImxpY2Vuc2UiOiAiTUlUIiwKICAiZGVwZW5kZW5jaWVzIjogewogICAgInBhdGNoYm9hcmQtanMiOiAiMC41LjEiCiAgfSwKICAiZGV2RGVwZW5kZW5jaWVzIjogewogICAgImFyayI6ICJ+MC41LjEiLAogICAgInVnbGlmeS1qcyI6ICJ+Mi40LjE0IgogIH0KfQ==","bb08aeaf8bdeaa025f8b79c1ba5a6b28":"YmIwOGFlYWY4YmRlYWEwMjVmOGI3OWMxYmE1YTZiMjg=","adc5ef8e601d2f030190103380a5c418":"ewogICJuYW1lIjogInBhdGNoYm9hcmQtanMiLAogICJkZXNjcmlwdGlvbiI6ICJKYXZhU2NyaXB0IGNsaWVudCBmb3IgUGF0Y2hib2FyZCBBUElzIiwKICAiYXV0aG9yIjogewogICAgIm5hbWUiOiAiTWF0dGhldyBLaW5nIgogIH0sCiAgInZlcnNpb24iOiAiMC40LjUiLAogICJyZXBvc2l0b3J5IjogewogICAgInR5cGUiOiAiZ2l0IiwKICAgICJ1cmwiOiAiZ2l0Oi8vZ2l0aHViLmNvbS9hdXRvbWF0dGhldy9wYXRjaGJvYXJkLWpzLmdpdCIKICB9LAogICJtYWluIjogIi4vc3JjL2NsaWVudC5jb2ZmZWUiLAogICJmaWxlcyI6IFsKICAgICJzcmMvIgogIF0sCiAgImRlcGVuZGVuY2llcyI6IHsKICAgICJqc2NrIjogIn4wLjEuNCIsCiAgICAiZmFpcm1vbnQiOiAifjAuOC4yIiwKICAgICJjb2ZmZWUtc2NyaXB0IjogIn4xLjcuMSIsCiAgICAiZXZpZSI6ICJ+MC4xLjMiCiAgfSwKICAiZGV2RGVwZW5kZW5jaWVzIjogewogICAgInRlc3RpZnkiOiAifjAuMi45IiwKICAgICJkZWFwIjogIn4wLjIuMCIKICB9LAogICJidWdzIjogewogICAgInVybCI6ICJodHRwczovL2dpdGh1Yi5jb20vYXV0b21hdHRoZXcvcGF0Y2hib2FyZC1qcy9pc3N1ZXMiCiAgfSwKICAiaG9tZXBhZ2UiOiAiaHR0cHM6Ly9naXRodWIuY29tL2F1dG9tYXR0aGV3L3BhdGNoYm9hcmQtanMiLAogICJfaWQiOiAicGF0Y2hib2FyZC1qc0AwLjQuNSIsCiAgImRpc3QiOiB7CiAgICAic2hhc3VtIjogImIwMGNkN2RjNTc4MDM3NWRjMDFmNGU3NDI5NGIzYTA3MTE1ZjU0MjAiLAogICAgInRhcmJhbGwiOiAiaHR0cDovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wYXRjaGJvYXJkLWpzLy0vcGF0Y2hib2FyZC1qcy0wLjQuNS50Z3oiCiAgfSwKICAiX2Zyb20iOiAicGF0Y2hib2FyZC1qc0AwLjQuNSIsCiAgIl9ucG1WZXJzaW9uIjogIjEuMy4yNiIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiYXV0b21hdHRoZXciLAogICAgImVtYWlsIjogImF1dG9tYXR0aGV3QGdtYWlsLmNvbSIKICB9LAogICJtYWludGFpbmVycyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiYXV0b21hdHRoZXciLAogICAgICAiZW1haWwiOiAiYXV0b21hdHRoZXdAZ21haWwuY29tIgogICAgfQogIF0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9zaGFzdW0iOiAiYjAwY2Q3ZGM1NzgwMzc1ZGMwMWY0ZTc0Mjk0YjNhMDcxMTVmNTQyMCIsCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9wYXRjaGJvYXJkLWpzLy0vcGF0Y2hib2FyZC1qcy0wLjQuNS50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","2530baa9593fdd82077ce6de85819fb9":"MjUzMGJhYTk1OTNmZGQ4MjA3N2NlNmRlODU4MTlmYjk=","08271abbd7383bb51cdd97e1e5d691ed":"ewogICJuYW1lIjogImV2aWUiLAogICJ2ZXJzaW9uIjogIjAuMS4zIiwKICAiZGVzY3JpcHRpb24iOiAiRXh0ZW5kcyBFdmVudEVtaXR0ZXItbGlrZSBjbGFzc2VzIiwKICAibWFpbiI6ICIuL2V2aWUuY29mZmVlIiwKICAiZmlsZXMiOiBbCiAgICAiaW5kZXguanMiLAogICAgImV2aWUuY29mZmVlIiwKICAgICJSRUFETUUubWQiCiAgXSwKICAiZGV2RGVwZW5kZW5jaWVzIjoge30sCiAgInJlcG9zaXRvcnkiOiB7CiAgICAidHlwZSI6ICJnaXQiLAogICAgInVybCI6ICJnaXRAZ2l0aHViLmNvbTpwYW5kYXN0cmlrZS9ldmllLmdpdCIKICB9LAogICJhdXRob3IiOiB7CiAgICAibmFtZSI6ICJNYXR0aGV3IEtpbmciLAogICAgImVtYWlsIjogImF1dG9tYXR0aGV3QGdtYWlsLmNvbSIKICB9LAogICJsaWNlbnNlIjogIk1JVCIsCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9wYW5kYXN0cmlrZS9ldmllL2lzc3VlcyIKICB9LAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20vcGFuZGFzdHJpa2UvZXZpZSIsCiAgIl9pZCI6ICJldmllQDAuMS4zIiwKICAiZGlzdCI6IHsKICAgICJzaGFzdW0iOiAiNzczZDEzZjQzZTMzNjQ3YzE5YTM4YTkwYjhlODE5NzMwMDIzYzI3MCIsCiAgICAidGFyYmFsbCI6ICJodHRwOi8vcmVnaXN0cnkubnBtanMub3JnL2V2aWUvLS9ldmllLTAuMS4zLnRneiIKICB9LAogICJfZnJvbSI6ICJldmllQDAuMS4zIiwKICAiX25wbVZlcnNpb24iOiAiMS4zLjI2IiwKICAiX25wbVVzZXIiOiB7CiAgICAibmFtZSI6ICJhdXRvbWF0dGhldyIsCiAgICAiZW1haWwiOiAiYXV0b21hdHRoZXdAZ21haWwuY29tIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJhdXRvbWF0dGhldyIsCiAgICAgICJlbWFpbCI6ICJhdXRvbWF0dGhld0BnbWFpbC5jb20iCiAgICB9CiAgXSwKICAiZGlyZWN0b3JpZXMiOiB7fSwKICAiX3NoYXN1bSI6ICI3NzNkMTNmNDNlMzM2NDdjMTlhMzhhOTBiOGU4MTk3MzAwMjNjMjcwIiwKICAiX3Jlc29sdmVkIjogImh0dHBzOi8vcmVnaXN0cnkubnBtanMub3JnL2V2aWUvLS9ldmllLTAuMS4zLnRneiIsCiAgInJlYWRtZSI6ICJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhIgp9Cg==","d27e7258dc1862a8972a243d75de1ce2":"ZDI3ZTcyNThkYzE4NjJhODk3MmEyNDNkNzVkZTFjZTI=","cd8c8e4248cbd8045f01d93af560931f":"Y2Q4YzhlNDI0OGNiZDgwNDVmMDFkOTNhZjU2MDkzMWY=","9599a58d8360b8dc160dce2ae489711e":"OTU5OWE1OGQ4MzYwYjhkYzE2MGRjZTJhZTQ4OTcxMWU=","24c56210341da4fe8d9afd004eec182f":"MjRjNTYyMTAzNDFkYTRmZThkOWFmZDAwNGVlYzE4MmY=","82c5bdc3e9c3b8443aa0ff355b20ff04":"ODJjNWJkYzNlOWMzYjg0NDNhYTBmZjM1NWIyMGZmMDQ=","747f17ffc949cd6d83468b9498f74adb":"NzQ3ZjE3ZmZjOTQ5Y2Q2ZDgzNDY4Yjk0OThmNzRhZGI=","41ba13a37c8e1123c1ebcffe37652e52":"NDFiYTEzYTM3YzhlMTEyM2MxZWJjZmZlMzc2NTJlNTI=","a22765138651ec9a7ea108cac78bff85":"YTIyNzY1MTM4NjUxZWM5YTdlYTEwOGNhYzc4YmZmODU=","f8d5455b785ad059a06697b9407864d4":"ewogICJuYW1lIjogImZhaXJtb250IiwKICAidmVyc2lvbiI6ICIwLjguMiIsCiAgImRlc2NyaXB0aW9uIjogIkEgY29sbGVjdGlvbiBvZiB1c2VmdWwgZnVuY3Rpb25zIGFuZCB1dGlsaXRpZXMuIiwKICAiZmlsZXMiOiBbCiAgICAic3JjLyIsCiAgICAibGliLyIsCiAgICAiZG9jcy5jb2ZmZWUiLAogICAgInRlc3QuY29mZmVlIiwKICAgICJSRUFETUUubWQiCiAgXSwKICAibWFpbiI6ICJsaWIvaW5kZXguanMiLAogICJzY3JpcHRzIjogewogICAgInByZXB1Ymxpc2giOiAiY29mZmVlIC1vIGxpYi8gLWMgc3JjLyouY29mZmVlICYmIG5wbSBydW4gZG9jcyIsCiAgICAiZG9jcyI6ICJjb2ZmZWUgZG9jLmNvZmZlZSA+IFJFQURNRS5tZCIsCiAgICAidGVzdCI6ICJjb2ZmZWUgdGVzdC9zaHJlZC5jb2ZmZWUiCiAgfSwKICAicmVwb3NpdG9yeSI6IHsKICAgICJ0eXBlIjogImdpdCIsCiAgICAidXJsIjogImdpdDovL2dpdGh1Yi5jb20vZHlvZGVyL2ZhaXJtb250LmdpdCIKICB9LAogICJrZXl3b3JkcyI6IFsKICAgICJjb2ZmZWUiLAogICAgImNvZmZlZXNjcmlwdCIsCiAgICAidXRpbGl0eSIKICBdLAogICJhdXRob3JzIjogWwogICAgIkRhbiBZb2RlciIsCiAgICAiTWF0dGhldyBLaW5nIgogIF0sCiAgImxpY2Vuc2UiOiAiTUlUIiwKICAiZGV2RGVwZW5kZW5jaWVzIjogewogICAgInRlc3RpZnkiOiAifjAuMi40IgogIH0sCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9keW9kZXIvZmFpcm1vbnQvaXNzdWVzIgogIH0sCiAgImhvbWVwYWdlIjogImh0dHBzOi8vZ2l0aHViLmNvbS9keW9kZXIvZmFpcm1vbnQiLAogICJfaWQiOiAiZmFpcm1vbnRAMC44LjIiLAogICJkaXN0IjogewogICAgInNoYXN1bSI6ICI5ZDU1MzIwYjA4OWUxODcwN2IyNjQ4ZDg4MDI2M2E3MGIwZDVkYWE3IiwKICAgICJ0YXJiYWxsIjogImh0dHA6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvZmFpcm1vbnQvLS9mYWlybW9udC0wLjguMi50Z3oiCiAgfSwKICAiX2Zyb20iOiAiZmFpcm1vbnRAfjAuOC4yIiwKICAiX25wbVZlcnNpb24iOiAiMS40LjMiLAogICJfbnBtVXNlciI6IHsKICAgICJuYW1lIjogImR5b2RlciIsCiAgICAiZW1haWwiOiAiZGFuaWVseW9kZXJAZ21haWwuY29tIgogIH0sCiAgIm1haW50YWluZXJzIjogWwogICAgewogICAgICAibmFtZSI6ICJkeW9kZXIiLAogICAgICAiZW1haWwiOiAiZGFuaWVseW9kZXJAZ21haWwuY29tIgogICAgfSwKICAgIHsKICAgICAgIm5hbWUiOiAibWFoZXNoeWVsbGFpIiwKICAgICAgImVtYWlsIjogIm1haGVzaC55ZWxsYWlAZ21haWwuY29tIgogICAgfQogIF0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9zaGFzdW0iOiAiOWQ1NTMyMGIwODllMTg3MDdiMjY0OGQ4ODAyNjNhNzBiMGQ1ZGFhNyIsCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9mYWlybW9udC8tL2ZhaXJtb250LTAuOC4yLnRneiIsCiAgInJlYWRtZSI6ICJFUlJPUjogTm8gUkVBRE1FIGRhdGEgZm91bmQhIgp9Cg==","c0a73e6d6931e1202ffdfd5566803616":"YzBhNzNlNmQ2OTMxZTEyMDJmZmRmZDU1NjY4MDM2MTY=","341c7aeaed1f5c684131c62a8a17c581":"MzQxYzdhZWFlZDFmNWM2ODQxMzFjNjJhOGExN2M1ODE=","7787fd435b2ab7fd8ad94b9817e0bb83":"Nzc4N2ZkNDM1YjJhYjdmZDhhZDk0Yjk4MTdlMGJiODM=","38dca1ac207353286c4133f680ae08e6":"MzhkY2ExYWMyMDczNTMyODZjNDEzM2Y2ODBhZTA4ZTY=","da8093d1d1d3046e3ee999c0a7d830ab":"ZGE4MDkzZDFkMWQzMDQ2ZTNlZTk5OWMwYTdkODMwYWI=","677d54885124243555d9ff4009cbb027":"Njc3ZDU0ODg1MTI0MjQzNTU1ZDlmZjQwMDljYmIwMjc=","0c72dc939e9b74cbebcccc6cdc786335":"MGM3MmRjOTM5ZTliNzRjYmViY2NjYzZjZGM3ODYzMzU=","b97f1924baacd876235530b52d089e30":"Yjk3ZjE5MjRiYWFjZDg3NjIzNTUzMGI1MmQwODllMzA=","71f8829ad5300b950b2a18a4f5e22fc3":"NzFmODgyOWFkNTMwMGI5NTBiMmExOGE0ZjVlMjJmYzM=","b0454bbaecd2c50735f97b03280b9285":"YjA0NTRiYmFlY2QyYzUwNzM1Zjk3YjAzMjgwYjkyODU=","5c400ce8cc523a0445906026b28a8654":"NWM0MDBjZThjYzUyM2EwNDQ1OTA2MDI2YjI4YTg2NTQ=","b6ed64f99f59aca97e62bac5ea8885ce":"YjZlZDY0Zjk5ZjU5YWNhOTdlNjJiYWM1ZWE4ODg1Y2U=","0577f2eabdad74bf4965b5b667a00463":"MDU3N2YyZWFiZGFkNzRiZjQ5NjViNWI2NjdhMDA0NjM=","609fc7c924bb8d0357f2cc2f1b90d87f":"NjA5ZmM3YzkyNGJiOGQwMzU3ZjJjYzJmMWI5MGQ4N2Y=","0bcb84aa4149b90f14b7837fee071e66":"MGJjYjg0YWE0MTQ5YjkwZjE0Yjc4MzdmZWUwNzFlNjY=","f00f3da0dfcc5edf6f67212dd15b1f13":"ZjAwZjNkYTBkZmNjNWVkZjZmNjcyMTJkZDE1YjFmMTM=","2d4103bff67fa1a99ce7c3e69abe120e":"MmQ0MTAzYmZmNjdmYTFhOTljZTdjM2U2OWFiZTEyMGU=","3bb228a9f0315ca34fa56350046e7d89":"M2JiMjI4YTlmMDMxNWNhMzRmYTU2MzUwMDQ2ZTdkODk=","e04f7ebdcfb9b101cdeec3adcff8500c":"ZTA0ZjdlYmRjZmI5YjEwMWNkZWVjM2FkY2ZmODUwMGM=","6447cf720a085928a1cdd64e0fb5ef34":"NjQ0N2NmNzIwYTA4NTkyOGExY2RkNjRlMGZiNWVmMzQ=","e29b3a1cdea6fad60c14985bbb438e39":"ZTI5YjNhMWNkZWE2ZmFkNjBjMTQ5ODViYmI0MzhlMzk=","e06990ed80036013bdbc22008581eb04":"ZTA2OTkwZWQ4MDAzNjAxM2JkYmMyMjAwODU4MWViMDQ=","be3c506ee8dc3624c61f414fa2de36e6":"ewogICJuYW1lIjogImRlYXAiLAogICJ2ZXJzaW9uIjogIjAuMi4yIiwKICAiZGVzY3JpcHRpb24iOiAiZXh0ZW5kIGFuZCBtZXJnZSBvYmplY3RzLCBkZWVwIG9yIHNoYWxsb3ciLAogICJtYWluIjogImluZGV4LmpzIiwKICAic2NyaXB0cyI6IHsKICAgICJ0ZXN0IjogIm1vY2hhIHRlc3QvKi50ZXN0LmpzIgogIH0sCiAgInJlcG9zaXRvcnkiOiB7CiAgICAidHlwZSI6ICJnaXQiLAogICAgInVybCI6ICJnaXQ6Ly9naXRodWIuY29tL3NlbGZjb250YWluZWQvZGVhcC5naXQiCiAgfSwKICAia2V5d29yZHMiOiBbCiAgICAiZXh0ZW5kIiwKICAgICJtZXJnZSIsCiAgICAibWl4aW4iLAogICAgImRlZXAiLAogICAgInNoYWxsb3ciLAogICAgImNsb25lIgogIF0sCiAgImF1dGhvciI6IHsKICAgICJuYW1lIjogIkJyYWQgSGFycmlzIiwKICAgICJlbWFpbCI6ICJibWhhcnJpc0BnbWFpbC5jb20iLAogICAgInVybCI6ICJodHRwOi8vc2VsZmNvbnRhaW5lZC51cyIKICB9LAogICJjb250cmlidXRvcnMiOiBbCiAgICB7CiAgICAgICJuYW1lIjogIkJyYWQgSGFycmlzIiwKICAgICAgImVtYWlsIjogImJtaGFycmlzQGdtYWlsLmNvbSIsCiAgICAgICJ1cmwiOiAiaHR0cDovL3NlbGZjb250YWluZWQudXMiCiAgICB9LAogICAgewogICAgICAibmFtZSI6ICJNYXR0IER1bmxhcCIsCiAgICAgICJ1cmwiOiAiaHR0cDovL2dpdGh1Yi5jb20vcHJlc3RhdWwiCiAgICB9CiAgXSwKICAibGljZW5zZSI6ICJNSVQiLAogICJkZXZEZXBlbmRlbmNpZXMiOiB7CiAgICAibW9jaGEiOiAifjEuOS4wIiwKICAgICJjaGFpIjogIn4xLjYuMCIKICB9LAogICJ0ZXN0bGluZyI6IHsKICAgICJicm93c2VycyI6IFsKICAgICAgImllLzkuLmxhdGVzdCIsCiAgICAgICJmaXJlZm94LzE5Li5sYXRlc3QiLAogICAgICAiY2hyb21lLzI1Li5sYXRlc3QiLAogICAgICAiaXBob25lL2xhdGVzdCIsCiAgICAgICJpcGFkL2xhdGVzdCIsCiAgICAgICJhbmRyb2lkLWJyb3dzZXIvbGF0ZXN0IgogICAgXSwKICAgICJoYXJuZXNzIjogIm1vY2hhLXRkZCIsCiAgICAiZmlsZXMiOiAidGVzdC8qLnRlc3QuanMiCiAgfSwKICAiYnVncyI6IHsKICAgICJ1cmwiOiAiaHR0cHM6Ly9naXRodWIuY29tL3NlbGZjb250YWluZWQvZGVhcC9pc3N1ZXMiCiAgfSwKICAiX2lkIjogImRlYXBAMC4yLjIiLAogICJkaXN0IjogewogICAgInNoYXN1bSI6ICI0ZWViZGUxYThhZGRhNWJhZjI0MjYxMzMzMjg4N2ViZTVmNWI4MWQ5IiwKICAgICJ0YXJiYWxsIjogImh0dHA6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvZGVhcC8tL2RlYXAtMC4yLjIudGd6IgogIH0sCiAgIl9mcm9tIjogImRlYXBAMC4yLjIiLAogICJfbnBtVmVyc2lvbiI6ICIxLjMuOCIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiYm1oYXJyaXMiLAogICAgImVtYWlsIjogImJtaGFycmlzQGdtYWlsLmNvbSIKICB9LAogICJtYWludGFpbmVycyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiYm1oYXJyaXMiLAogICAgICAiZW1haWwiOiAiYm1oYXJyaXNAZ21haWwuY29tIgogICAgfSwKICAgIHsKICAgICAgIm5hbWUiOiAicHJlc3RhdWwiLAogICAgICAiZW1haWwiOiAibnBtLnByZXN0YXVsQHNwYW1nb3VybWV0LmNvbSIKICAgIH0KICBdLAogICJkaXJlY3RvcmllcyI6IHt9LAogICJfc2hhc3VtIjogIjRlZWJkZTFhOGFkZGE1YmFmMjQyNjEzMzMyODg3ZWJlNWY1YjgxZDkiLAogICJfcmVzb2x2ZWQiOiAiaHR0cHM6Ly9yZWdpc3RyeS5ucG1qcy5vcmcvZGVhcC8tL2RlYXAtMC4yLjIudGd6IiwKICAicmVhZG1lIjogIkVSUk9SOiBObyBSRUFETUUgZGF0YSBmb3VuZCEiLAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20vc2VsZmNvbnRhaW5lZC9kZWFwIgp9Cg==","aa52bf0246ac9706bfbbedbfdf306cf6":"YWE1MmJmMDI0NmFjOTcwNmJmYmJlZGJmZGYzMDZjZjY=","94588e522e310163e8cc1354ea38b9f8":"ewogICJuYW1lIjogImpzY2siLAogICJ2ZXJzaW9uIjogIjAuMS40IiwKICAiZGVzY3JpcHRpb24iOiAiSlNPTiBTY2hlbWEgQ29tcGlsZWQgY2hlY0siLAogICJtYWluIjogImxpYi9pbmRleC5qcyIsCiAgImZpbGVzIjogWwogICAgImxpYi8iLAogICAgIlJFQURNRS5tZCIKICBdLAogICJkZXBlbmRlbmNpZXMiOiB7CiAgICAiZGVhcCI6ICJ+MC4yLjAiCiAgfSwKICAiZGV2RGVwZW5kZW5jaWVzIjogewogICAgInRlc3RpZnkiOiAifjAuMi44IiwKICAgICJtaWNyb3RpbWUiOiAifjAuNC4wIiwKICAgICJKU1YiOiAifjQuMC4yIiwKICAgICJqc29uc2NoZW1hIjogIn4wLjQuMCIsCiAgICAiY29mZmVlLXNjcmlwdCI6ICJ+MS42LjMiLAogICAgImdsb2IiOiAifjMuMi42IiwKICAgICJzaW1wbGUtaHR0cC1zZXJ2ZXIiOiAifjAuMS44IgogIH0sCiAgInJlcG9zaXRvcnkiOiB7CiAgICAidHlwZSI6ICJnaXQiLAogICAgInVybCI6ICJnaXRAZ2l0aHViLmNvbTphdXRvbWF0dGhldy9qc2NrLmdpdCIKICB9LAogICJhdXRob3IiOiB7CiAgICAibmFtZSI6ICJNYXR0aGV3IEtpbmciLAogICAgImVtYWlsIjogImF1dG9tYXR0aGV3QGdtYWlsLmNvbSIKICB9LAogICJsaWNlbnNlIjogIk1JVCIsCiAgImJ1Z3MiOiB7CiAgICAidXJsIjogImh0dHBzOi8vZ2l0aHViLmNvbS9hdXRvbWF0dGhldy9qc2NrL2lzc3VlcyIKICB9LAogICJob21lcGFnZSI6ICJodHRwczovL2dpdGh1Yi5jb20vYXV0b21hdHRoZXcvanNjayIsCiAgIl9pZCI6ICJqc2NrQDAuMS40IiwKICAiZGlzdCI6IHsKICAgICJzaGFzdW0iOiAiZjEyMGZiMWI3MjUxYjU2NTIwOWZlZDFkMjg2MWY2YTFhNzEzNzZiZiIsCiAgICAidGFyYmFsbCI6ICJodHRwOi8vcmVnaXN0cnkubnBtanMub3JnL2pzY2svLS9qc2NrLTAuMS40LnRneiIKICB9LAogICJfZnJvbSI6ICJqc2NrQH4wLjEuNCIsCiAgIl9ucG1WZXJzaW9uIjogIjEuMy4yNiIsCiAgIl9ucG1Vc2VyIjogewogICAgIm5hbWUiOiAiYXV0b21hdHRoZXciLAogICAgImVtYWlsIjogImF1dG9tYXR0aGV3QGdtYWlsLmNvbSIKICB9LAogICJtYWludGFpbmVycyI6IFsKICAgIHsKICAgICAgIm5hbWUiOiAiYXV0b21hdHRoZXciLAogICAgICAiZW1haWwiOiAiYXV0b21hdHRoZXdAZ21haWwuY29tIgogICAgfQogIF0sCiAgImRpcmVjdG9yaWVzIjoge30sCiAgIl9zaGFzdW0iOiAiZjEyMGZiMWI3MjUxYjU2NTIwOWZlZDFkMjg2MWY2YTFhNzEzNzZiZiIsCiAgIl9yZXNvbHZlZCI6ICJodHRwczovL3JlZ2lzdHJ5Lm5wbWpzLm9yZy9qc2NrLy0vanNjay0wLjEuNC50Z3oiLAogICJyZWFkbWUiOiAiRVJST1I6IE5vIFJFQURNRSBkYXRhIGZvdW5kISIKfQo=","36ca37817bdc9c1a5fd549a8c3c88b37":"MzZjYTM3ODE3YmRjOWMxYTVmZDU0OWE4YzNjODhiMzc=","9008cb802dd4e9cb3efea51b7966e4ec":"OTAwOGNiODAyZGQ0ZTljYjNlZmVhNTFiNzk2NmU0ZWM=","0a2349ef82f9b98a105186e3b514490a":"MGEyMzQ5ZWY4MmY5Yjk4YTEwNTE4NmUzYjUxNDQ5MGE=","45c85f4b833e42cee72458133318b91d":"NDVjODVmNGI4MzNlNDJjZWU3MjQ1ODEzMzMxOGI5MWQ=","208a52b4693a2e85d863f928eb8a377d":"MjA4YTUyYjQ2OTNhMmU4NWQ4NjNmOTI4ZWI4YTM3N2Q=","c4f9141dbd0d7a4e3dd3d1dc0a64c667":"YzRmOTE0MWRiZDBkN2E0ZTNkZDNkMWRjMGE2NGM2Njc=","5d6e2c2d895132330e91af96bc1409c7":"NWQ2ZTJjMmQ4OTUxMzIzMzBlOTFhZjk2YmMxNDA5Yzc=","8f99cc2b75044ae1f45cefc6948e42b3":"OGY5OWNjMmI3NTA0NGFlMWY0NWNlZmM2OTQ4ZTQyYjM=","e78828afe729e92d62b73d30c483888f":"ZTc4ODI4YWZlNzI5ZTkyZDYyYjczZDMwYzQ4Mzg4OGY=","223f09f17e4aff9f2d05493c688f7934":"MjIzZjA5ZjE3ZTRhZmY5ZjJkMDU0OTNjNjg4Zjc5MzQ=","ddeff58ff67e5d2d686891fc66ebb2b7":"ZGRlZmY1OGZmNjdlNWQyZDY4Njg5MWZjNjZlYmIyYjc=","7b51c3f0555ccb0c0f1fcd91d389ea1a":"N2I1MWMzZjA1NTVjY2IwYzBmMWZjZDkxZDM4OWVhMWE=","d0c9d6cc2490c964b789d43ae4803b7b":"ZDBjOWQ2Y2MyNDkwYzk2NGI3ODlkNDNhZTQ4MDNiN2I=","b499eb63a89b9e6fb99ef1209a65ace6":"YjQ5OWViNjNhODliOWU2ZmI5OWVmMTIwOWE2NWFjZTY=","54c69a095dc8e4a9173bd8284c4e8ad7":"NTRjNjlhMDk1ZGM4ZTRhOTE3M2JkODI4NGM0ZThhZDc=","f0d5935f094eb3d9fb70c67795bd4caf":"ZjBkNTkzNWYwOTRlYjNkOWZiNzBjNjc3OTViZDRjYWY=","a8aae685be6eeb8ec844ae9c4f5fd189":"YThhYWU2ODViZTZlZWI4ZWM4NDRhZTljNGY1ZmQxODk="},
      modules: {
        api: {"assert":"c4f9141dbd0d7a4e3dd3d1dc0a64c667","http":"5d6e2c2d895132330e91af96bc1409c7","https":"8f99cc2b75044ae1f45cefc6948e42b3","fs":"e78828afe729e92d62b73d30c483888f","module":"223f09f17e4aff9f2d05493c688f7934","util":"ddeff58ff67e5d2d686891fc66ebb2b7","path":"7b51c3f0555ccb0c0f1fcd91d389ea1a","url":"d0c9d6cc2490c964b789d43ae4803b7b","events":"b499eb63a89b9e6fb99ef1209a65ace6","querystring":"54c69a095dc8e4a9173bd8284c4e8ad7","stream":"f0d5935f094eb3d9fb70c67795bd4caf","crypto":"a8aae685be6eeb8ec844ae9c4f5fd189"},
        function: {
          
            "bb08aeaf8bdeaa025f8b79c1ba5a6b28": // from: application.coffee
function(exports,require,module,__filename,__dirname) {

window.Patchboard = require("patchboard-js");
  
}
,
          
            "2530baa9593fdd82077ce6de85819fb9": // from: node_modules/patchboard-js/node_modules/evie/evie.coffee
function(exports,require,module,__filename,__dirname) {
var EventEmitter, Evie, evie,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

EventEmitter = require("events").EventEmitter;

evie = function(klass) {
  var method, name, _i, _len, _ref, _results;
  _ref = ["emit", "forward", "source", "serially", "concurrently", "wrap"];
  _results = [];
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    name = _ref[_i];
    method = Evie.prototype[name];
    console.log(name);
    _results.push(klass.prototype[name] = method);
  }
  return _results;
};

Evie = (function(_super) {

  __extends(Evie, _super);

  function Evie() {
    return Evie.__super__.constructor.apply(this, arguments);
  }

  Evie.prototype.emit = function() {
    var args, filters, name, other, _i, _len, _ref, _ref1, _ref2, _results;
    name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (name !== "error" || (((_ref = this._events) != null ? _ref.error : void 0) != null) || !(this._forwards != null)) {
      Evie.__super__.emit.apply(this, [name].concat(__slice.call(args)));
    }
    if (this._forwards != null) {
      _ref1 = this._forwards;
      _results = [];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        _ref2 = _ref1[_i], other = _ref2[0], filters = _ref2[1];
        if ((filters != null) && filters[name]) {
          _results.push(other.emit.apply(other, filters[name].apply(filters, args)));
        } else {
          _results.push(other.emit.apply(other, [name].concat(__slice.call(args))));
        }
      }
      return _results;
    }
  };

  Evie.prototype.forward = function(other, filters) {
    var _ref;
    if ((_ref = this._forwards) == null) {
      this._forwards = [];
    }
    return this._forwards.push([other, filters]);
  };

  Evie.prototype.source = function(callback) {
    var other;
    other = new this.constructor();
    other.forward(this);
    if (callback != null) {
      setImmediate(function() {
        return callback(other);
      });
    }
    return other;
  };

  Evie.prototype.serially = function(builder) {
    var functions, go, series;
    functions = [];
    go = function(fn) {
      return functions.push(fn);
    };
    builder(go);
    series = this.source();
    return function(arg) {
      var count, results, _fn;
      results = [];
      count = 0;
      _fn = function(arg) {
        var fn, rval;
        if (arg !== void 0) {
          results.push(arg);
        }
        fn = functions.shift();
        if (fn != null) {
          count++;
          try {
            rval = fn(arg);
            if (rval instanceof this.constructor) {
              rval.on("success", _fn);
              return rval.on("error", function(error) {
                return series.emit("error", error);
              });
            } else {
              return _fn(rval);
            }
          } catch (error) {
            return series.emit("error", error);
          }
        } else {
          return series.emit("success", results);
        }
      };
      _fn(arg);
      return series;
    };
  };

  Evie.prototype.concurrently = function(builder) {
    var events, functions, go;
    functions = [];
    go = function(name, fn) {
      return functions.push((fn != null ? [name, fn] : [null, name]));
    };
    builder(go);
    events = this.source();
    return function(arg) {
      var _fn;
      _fn = function(arg) {
        var called, errors, finish, fn, name, record_error, results, returned, _i, _len, _ref, _results;
        results = {};
        errors = {};
        called = 0;
        returned = 0;
        finish = function() {
          var _error;
          returned++;
          if (called === returned) {
            if (Object.keys(errors).length === 0) {
              return events.emit("success", results);
            } else {
              _error = new Error("concurrently: unable to complete");
              _error.errors = errors;
              return events.emit("error", _error);
            }
          }
        };
        record_error = function(name, _error) {
          if (name) {
            errors[name] = _error;
          } else {
            errors.unnamed_actions || (errors.unnamed_actions = []);
            errors.unnamed_actions.push(_error);
          }
          return finish();
        };
        if (functions.length === 0) {
          return arg;
        }
        _results = [];
        for (_i = 0, _len = functions.length; _i < _len; _i++) {
          _ref = functions[_i], name = _ref[0], fn = _ref[1];
          _results.push((function(name, fn) {
            var rval, success;
            success = function(result) {
              if (name != null) {
                results[name] = result;
              }
              return finish();
            };
            try {
              called++;
              rval = fn(arg);
              if (rval instanceof this.constructor) {
                rval.on("success", success);
                return rval.on("error", function(error) {
                  return record_error(name, error);
                });
              } else {
                return success(rval);
              }
            } catch (_error) {
              return record_error(name, _error);
            }
          })(name, fn));
        }
        return _results;
      };
      _fn(arg);
      return events;
    };
  };

  Evie.prototype.wrap = function() {
    var fn, fns, rval;
    fns = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    rval = (function() {
      var _i, _len, _results,
        _this = this;
      _results = [];
      for (_i = 0, _len = fns.length; _i < _len; _i++) {
        fn = fns[_i];
        _results.push(function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return _this.source(function(events) {
            var series;
            series = _this.serially(function(step) {
              var arg, i, _j, _len1, _results1;
              _results1 = [];
              for (i = _j = 0, _len1 = args.length; _j < _len1; i = ++_j) {
                arg = args[i];
                _results1.push((function(arg) {
                  return step(function() {
                    return arg;
                  });
                })(arg));
              }
              return _results1;
            })();
            series.on("error", function(error) {
              return events.emit("error", error);
            });
            return series.on("success", function(results) {
              try {
                return fn.apply(null, __slice.call(results).concat([events.callback]));
              } catch (error) {
                return events.emit("error", error);
              }
            });
          });
        });
      }
      return _results;
    }).call(this);
    if (rval.length < 2) {
      return rval[0];
    } else {
      return rval;
    }
  };

  return Evie;

})(EventEmitter);

module.exports = {
  evie: evie,
  Evie: Evie
};
  
}
,
          
            "d27e7258dc1862a8972a243d75de1ce2": // from: node_modules/patchboard-js/node_modules/fairmont/lib/array.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var $;

  $ = {};

  $.remove = function(array, element) {
    var index, _ref;
    if ((index = array.indexOf(element)) > -1) {
      [].splice.apply(array, [index, index - index + 1].concat(_ref = [])), _ref;
      return element;
    } else {
      return null;
    }
  };

  $.uniq = function(array, hash) {
    var element, key, uniques, _i, _j, _len, _len1, _ref, _results;
    if (hash == null) {
      hash = function(object) {
        return object.toString();
      };
    }
    uniques = {};
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      element = array[_i];
      uniques[hash(element)] = element;
    }
    _ref = Object.keys(uniques);
    _results = [];
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      key = _ref[_j];
      _results.push(uniques[key]);
    }
    return _results;
  };

  $.shuffle = function(array) {
    var copy, i, j, _i, _ref, _ref1;
    copy = array.slice(0);
    if (copy.length <= 1) {
      return copy;
    }
    for (i = _i = _ref = copy.length - 1; _ref <= 1 ? _i <= 1 : _i >= 1; i = _ref <= 1 ? ++_i : --_i) {
      j = Math.floor(Math.random() * (i + 1));
      _ref1 = [copy[j], copy[i]], copy[i] = _ref1[0], copy[j] = _ref1[1];
    }
    return copy;
  };

  module.exports = $;

}).call(this);
  
}
,
          
            "cd8c8e4248cbd8045f01d93af560931f": // from: node_modules/patchboard-js/node_modules/fairmont/lib/assert.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var assert, type;

  assert = require("assert");

  type = require("./type");

  assert.type = function(value, string) {
    return assert.equal(type(value), string);
  };

  assert.keys = function(object, keys) {
    assert.type(object, "object");
    return assert.deepEqual(Object.keys(object).sort(), keys.sort());
  };

  assert.hasKeys = function(object, keys) {
    var key, _i, _len, _results;
    assert.type(object, "object");
    _results = [];
    for (_i = 0, _len = keys.length; _i < _len; _i++) {
      key = keys[_i];
      _results.push(assert.ok(object[key] != null));
    }
    return _results;
  };

  assert.partialEqual = function(actual, expected) {
    var key, val, _results;
    assert.type(actual, "object");
    _results = [];
    for (key in expected) {
      val = expected[key];
      _results.push(assert.deepEqual(actual[key], val));
    }
    return _results;
  };

  module.exports = {};

}).call(this);
  
}
,
          
            "9599a58d8360b8dc160dce2ae489711e": // from: node_modules/patchboard-js/node_modules/fairmont/lib/crypto.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var $;

  $ = {};

  $.md5 = function(string) {
    var Crypto;
    Crypto = require("crypto");
    return Crypto.createHash('md5').update(string, 'utf-8').digest("hex");
  };

  $.base64 = function(string) {
    var Crypto;
    Crypto = require("crypto");
    return new Buffer(string).toString('base64');
  };

  module.exports = $;

}).call(this);
  
}
,
          
            "24c56210341da4fe8d9afd004eec182f": // from: node_modules/patchboard-js/node_modules/fairmont/lib/fs.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var $;

  $ = {};

  $.exists = function(path) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.existsSync(path);
  };

  $.read = function(path) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.readFileSync(path, 'utf-8');
  };

  $.readdir = function(path) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.readdirSync(path);
  };

  $.stat = function(path) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.statSync(path);
  };

  $.write = function(path, content) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.writeFileSync(path, content);
  };

  $.chdir = function(dir, fn) {
    var cwd, rval;
    cwd = process.cwd();
    process.chdir(dir);
    rval = fn();
    process.chdir(cwd);
    return rval;
  };

  $.rm = function(path) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.unlinkSync(path);
  };

  $.rmdir = function(path) {
    var FileSystem;
    FileSystem = require("fs");
    return FileSystem.rmdirSync(path);
  };

  module.exports = $;

}).call(this);
  
}
,
          
            "82c5bdc3e9c3b8443aa0ff355b20ff04": // from: node_modules/patchboard-js/node_modules/fairmont/lib/index.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var $, basename, filename, include, readdir, _i, _len, _module, _ref;

  $ = {};

  $.w = function(string) {
    return string.trim().split(/\s+/);
  };

  $.to = function(to, from) {
    if (from instanceof to) {
      return from;
    } else {
      return new to(from);
    }
  };

  $.abort = function() {
    return process.exit(-1);
  };

  $.memoize = function(fn, hash) {
    var memo;
    if (hash == null) {
      hash = function(object) {
        return object.toString();
      };
    }
    memo = {};
    return function(thing) {
      var _name;
      return memo[_name = hash(thing)] != null ? memo[_name] : memo[_name] = fn(thing);
    };
  };


  /* timer */

  $.timer = function(wait, action) {
    var id;
    id = setTimeout(action, wait);
    return function() {
      return clearTimeout(id);
    };
  };

  basename = require("path").basename;

  readdir = require("./fs").readdir;

  include = require("./object").include;

  _ref = readdir(__dirname);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    filename = _ref[_i];
    _module = basename(filename, ".coffee");
    if (_module !== "index") {
      include($, require("./" + _module));
    }
  }

  module.exports = $;

}).call(this);
  
}
,
          
            "747f17ffc949cd6d83468b9498f74adb": // from: node_modules/patchboard-js/node_modules/fairmont/lib/object.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var $, include, type,
    __slice = [].slice;

  $ = {};

  type = require("./type");

  $.include = include = function() {
    var key, mixin, mixins, object, value, _i, _len;
    object = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = mixins.length; _i < _len; _i++) {
      mixin = mixins[_i];
      for (key in mixin) {
        value = mixin[key];
        object[key] = value;
      }
    }
    return object;
  };

  $.Property = {
    property: (function() {
      var defaults;
      defaults = {
        enumerable: true,
        configurable: true
      };
      return function(properties) {
        var key, value, _results;
        _results = [];
        for (key in properties) {
          value = properties[key];
          include(value, defaults);
          _results.push(Object.defineProperty(this.prototype, key, value));
        }
        return _results;
      };
    })()
  };

  $.delegate = function(from, to) {
    var name, value, _results;
    _results = [];
    for (name in to) {
      value = to[name];
      if ((type(value)) === "function") {
        _results.push((function(value) {
          return from[name] = function() {
            var args;
            args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
            return value.call.apply(value, [to].concat(__slice.call(args)));
          };
        })(value));
      }
    }
    return _results;
  };

  $.merge = function() {
    var destination, k, object, objects, v, _i, _len;
    objects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    destination = {};
    for (_i = 0, _len = objects.length; _i < _len; _i++) {
      object = objects[_i];
      for (k in object) {
        v = object[k];
        destination[k] = v;
      }
    }
    return destination;
  };

  $.clone = function(object) {
    var clone, flags, key;
    if ((object == null) || typeof object !== 'object') {
      return object;
    }
    if (object instanceof Date) {
      return new Date(obj.getTime());
    }
    if (object instanceof RegExp) {
      flags = '';
      if (object.global != null) {
        flags += 'g';
      }
      if (object.ignoreCase != null) {
        flags += 'i';
      }
      if (object.multiline != null) {
        flags += 'm';
      }
      if (object.sticky != null) {
        flags += 'y';
      }
      return new RegExp(object.source, flags);
    }
    clone = new object.constructor();
    for (key in object) {
      clone[key] = $.clone(object[key]);
    }
    return clone;
  };

  module.exports = $;

}).call(this);
  
}
,
          
            "41ba13a37c8e1123c1ebcffe37652e52": // from: node_modules/patchboard-js/node_modules/fairmont/lib/string.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var $;

  $ = {};

  $.capitalize = function(string) {
    return string[0].toUpperCase() + string.slice(1);
  };

  $.titleCase = function(string) {
    return string.toLowerCase().replace(/^(\w)|\W(\w)/g, function(char) {
      return char.toUpperCase();
    });
  };

  $.camelCase = $.camel_case = function(string) {
    return string.toLowerCase().replace(/(\W+\w)/g, function(string) {
      return string.trim().toUpperCase();
    });
  };

  $.underscored = function(string) {
    return $.plainText(string).replace(/\W+/g, "_");
  };

  $.dashed = function(string) {
    return $.plainText(string).replace(/\W+/g, "-");
  };

  $.plainText = $.plain_text = function(string) {
    return string.replace(/^[A-Z]/g, function(c) {
      return c.toLowerCase();
    }).replace(/[A-Z]/g, function(c) {
      return " " + (c.toLowerCase());
    }).replace(/\W+/g, " ");
  };

  $.htmlEscape = $.html_escape = (function() {
    var entities, map, re;
    map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    };
    entities = Object.keys(map);
    re = new RegExp("" + (entities.join('|')), "g");
    return function(string) {
      return string.replace(re, function(s) {
        return map[s];
      });
    };
  })();

  module.exports = $;

}).call(this);
  
}
,
          
            "a22765138651ec9a7ea108cac78bff85": // from: node_modules/patchboard-js/node_modules/fairmont/lib/type.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.7.1
(function() {
  var classToType, classes, name, _i, _len;

  classes = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"];

  classToType = new Object;

  for (_i = 0, _len = classes.length; _i < _len; _i++) {
    name = classes[_i];
    classToType["[object " + name + "]"] = name.toLowerCase();
  }

  module.exports = {
    type: function(object) {
      var myClass;
      if (object === void 0) {
        return "undefined";
      }
      if (object === null) {
        return "null";
      }
      myClass = Object.prototype.toString.call(object);
      if (myClass in classToType) {
        return classToType[myClass];
      } else {
        return "object";
      }
    }
  };

}).call(this);
  
}
,
          
            "c0a73e6d6931e1202ffdfd5566803616": // from: node_modules/patchboard-js/node_modules/fairmont/src/array.coffee
function(exports,require,module,__filename,__dirname) {
var $;

$ = {};

$.remove = function(array, element) {
  var index, _ref;
  if ((index = array.indexOf(element)) > -1) {
    [].splice.apply(array, [index, index - index + 1].concat(_ref = [])), _ref;
    return element;
  } else {
    return null;
  }
};

$.uniq = function(array, hash) {
  var element, key, uniques, _i, _j, _len, _len1, _ref, _results;
  if (hash == null) {
    hash = function(object) {
      return object.toString();
    };
  }
  uniques = {};
  for (_i = 0, _len = array.length; _i < _len; _i++) {
    element = array[_i];
    uniques[hash(element)] = element;
  }
  _ref = Object.keys(uniques);
  _results = [];
  for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
    key = _ref[_j];
    _results.push(uniques[key]);
  }
  return _results;
};

$.shuffle = function(array) {
  var copy, i, j, _i, _ref, _ref1;
  copy = array.slice(0);
  if (copy.length <= 1) {
    return copy;
  }
  for (i = _i = _ref = copy.length - 1; _ref <= 1 ? _i <= 1 : _i >= 1; i = _ref <= 1 ? ++_i : --_i) {
    j = Math.floor(Math.random() * (i + 1));
    _ref1 = [copy[j], copy[i]], copy[i] = _ref1[0], copy[j] = _ref1[1];
  }
  return copy;
};

module.exports = $;
  
}
,
          
            "341c7aeaed1f5c684131c62a8a17c581": // from: node_modules/patchboard-js/node_modules/fairmont/src/assert.coffee
function(exports,require,module,__filename,__dirname) {
var assert, type;

assert = require("assert");

type = require("./type");

assert.type = function(value, string) {
  return assert.equal(type(value), string);
};

assert.keys = function(object, keys) {
  assert.type(object, "object");
  return assert.deepEqual(Object.keys(object).sort(), keys.sort());
};

assert.hasKeys = function(object, keys) {
  var key, _i, _len, _results;
  assert.type(object, "object");
  _results = [];
  for (_i = 0, _len = keys.length; _i < _len; _i++) {
    key = keys[_i];
    _results.push(assert.ok(object[key] != null));
  }
  return _results;
};

assert.partialEqual = function(actual, expected) {
  var key, val, _results;
  assert.type(actual, "object");
  _results = [];
  for (key in expected) {
    val = expected[key];
    _results.push(assert.deepEqual(actual[key], val));
  }
  return _results;
};

module.exports = {};
  
}
,
          
            "7787fd435b2ab7fd8ad94b9817e0bb83": // from: node_modules/patchboard-js/node_modules/fairmont/src/crypto.coffee
function(exports,require,module,__filename,__dirname) {
var $;

$ = {};

$.md5 = function(string) {
  var Crypto;
  Crypto = require("crypto");
  return Crypto.createHash('md5').update(string, 'utf-8').digest("hex");
};

$.base64 = function(string) {
  var Crypto;
  Crypto = require("crypto");
  return new Buffer(string).toString('base64');
};

module.exports = $;
  
}
,
          
            "38dca1ac207353286c4133f680ae08e6": // from: node_modules/patchboard-js/node_modules/fairmont/src/fs.coffee
function(exports,require,module,__filename,__dirname) {
var $;

$ = {};

$.exists = function(path) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.existsSync(path);
};

$.read = function(path) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.readFileSync(path, 'utf-8');
};

$.readdir = function(path) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.readdirSync(path);
};

$.stat = function(path) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.statSync(path);
};

$.write = function(path, content) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.writeFileSync(path, content);
};

$.chdir = function(dir, fn) {
  var cwd, rval;
  cwd = process.cwd();
  process.chdir(dir);
  rval = fn();
  process.chdir(cwd);
  return rval;
};

$.rm = function(path) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.unlinkSync(path);
};

$.rmdir = function(path) {
  var FileSystem;
  FileSystem = require("fs");
  return FileSystem.rmdirSync(path);
};

module.exports = $;
  
}
,
          
            "da8093d1d1d3046e3ee999c0a7d830ab": // from: node_modules/patchboard-js/node_modules/fairmont/src/index.coffee
function(exports,require,module,__filename,__dirname) {
var $, basename, filename, include, readdir, _i, _len, _module, _ref;

$ = {};

$.w = function(string) {
  return string.trim().split(/\s+/);
};

$.to = function(to, from) {
  if (from instanceof to) {
    return from;
  } else {
    return new to(from);
  }
};

$.abort = function() {
  return process.exit(-1);
};

$.memoize = function(fn, hash) {
  var memo;
  if (hash == null) {
    hash = function(object) {
      return object.toString();
    };
  }
  memo = {};
  return function(thing) {
    var _name, _ref;
    return (_ref = memo[_name = hash(thing)]) != null ? _ref : memo[_name] = fn(thing);
  };
};

/* timer
*/


$.timer = function(wait, action) {
  var id;
  id = setTimeout(action, wait);
  return function() {
    return clearTimeout(id);
  };
};

basename = require("path").basename;

readdir = require("./fs").readdir;

include = require("./object").include;

_ref = readdir(__dirname);
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  filename = _ref[_i];
  _module = basename(filename, ".coffee");
  if (_module !== "index") {
    include($, require("./" + _module));
  }
}

module.exports = $;
  
}
,
          
            "677d54885124243555d9ff4009cbb027": // from: node_modules/patchboard-js/node_modules/fairmont/src/object.coffee
function(exports,require,module,__filename,__dirname) {
var $, include, type,
  __slice = [].slice;

$ = {};

type = require("./type");

$.include = include = function() {
  var key, mixin, mixins, object, value, _i, _len;
  object = arguments[0], mixins = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
  for (_i = 0, _len = mixins.length; _i < _len; _i++) {
    mixin = mixins[_i];
    for (key in mixin) {
      value = mixin[key];
      object[key] = value;
    }
  }
  return object;
};

$.Property = {
  property: (function() {
    var defaults;
    defaults = {
      enumerable: true,
      configurable: true
    };
    return function(properties) {
      var key, value, _results;
      _results = [];
      for (key in properties) {
        value = properties[key];
        include(value, defaults);
        _results.push(Object.defineProperty(this.prototype, key, value));
      }
      return _results;
    };
  })()
};

$.delegate = function(from, to) {
  var name, value, _results;
  _results = [];
  for (name in to) {
    value = to[name];
    if ((type(value)) === "function") {
      _results.push((function(value) {
        return from[name] = function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return value.call.apply(value, [to].concat(__slice.call(args)));
        };
      })(value));
    }
  }
  return _results;
};

$.merge = function() {
  var destination, k, object, objects, v, _i, _len;
  objects = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  destination = {};
  for (_i = 0, _len = objects.length; _i < _len; _i++) {
    object = objects[_i];
    for (k in object) {
      v = object[k];
      destination[k] = v;
    }
  }
  return destination;
};

$.clone = function(object) {
  var clone, flags, key;
  if (!(object != null) || typeof object !== 'object') {
    return object;
  }
  if (object instanceof Date) {
    return new Date(obj.getTime());
  }
  if (object instanceof RegExp) {
    flags = '';
    if (object.global != null) {
      flags += 'g';
    }
    if (object.ignoreCase != null) {
      flags += 'i';
    }
    if (object.multiline != null) {
      flags += 'm';
    }
    if (object.sticky != null) {
      flags += 'y';
    }
    return new RegExp(object.source, flags);
  }
  clone = new object.constructor();
  for (key in object) {
    clone[key] = $.clone(object[key]);
  }
  return clone;
};

module.exports = $;
  
}
,
          
            "0c72dc939e9b74cbebcccc6cdc786335": // from: node_modules/patchboard-js/node_modules/fairmont/src/string.coffee
function(exports,require,module,__filename,__dirname) {
var $;

$ = {};

$.capitalize = function(string) {
  return string[0].toUpperCase() + string.slice(1);
};

$.titleCase = function(string) {
  return string.toLowerCase().replace(/^(\w)|\W(\w)/g, function(char) {
    return char.toUpperCase();
  });
};

$.camelCase = $.camel_case = function(string) {
  return string.toLowerCase().replace(/(\W+\w)/g, function(string) {
    return string.trim().toUpperCase();
  });
};

$.underscored = function(string) {
  return $.plainText(string).replace(/\W+/g, "_");
};

$.dashed = function(string) {
  return $.plainText(string).replace(/\W+/g, "-");
};

$.plainText = $.plain_text = function(string) {
  return string.replace(/^[A-Z]/g, function(c) {
    return c.toLowerCase();
  }).replace(/[A-Z]/g, function(c) {
    return " " + (c.toLowerCase());
  }).replace(/\W+/g, " ");
};

$.htmlEscape = $.html_escape = (function() {
  var entities, map, re;
  map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };
  entities = Object.keys(map);
  re = new RegExp("" + (entities.join('|')), "g");
  return function(string) {
    return string.replace(re, function(s) {
      return map[s];
    });
  };
})();

module.exports = $;
  
}
,
          
            "b97f1924baacd876235530b52d089e30": // from: node_modules/patchboard-js/node_modules/fairmont/src/type.coffee
function(exports,require,module,__filename,__dirname) {
var classToType, classes, name, _i, _len;

classes = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"];

classToType = new Object;

for (_i = 0, _len = classes.length; _i < _len; _i++) {
  name = classes[_i];
  classToType["[object " + name + "]"] = name.toLowerCase();
}

module.exports = {
  type: function(object) {
    var myClass;
    if (object === void 0) {
      return "undefined";
    }
    if (object === null) {
      return "null";
    }
    myClass = Object.prototype.toString.call(object);
    if (myClass in classToType) {
      return classToType[myClass];
    } else {
      return "object";
    }
  }
};
  
}
,
          
            "71f8829ad5300b950b2a18a4f5e22fc3": // from: node_modules/patchboard-js/node_modules/fairmont/test.coffee
function(exports,require,module,__filename,__dirname) {
var Fairmont, Testify, assert;

assert = require("assert");

Testify = require("testify");

Fairmont = require("./src/index");

Testify.test("String functions", function(context) {
  context.test("capitalize", function() {
    var capitalize;
    capitalize = Fairmont.capitalize;
    return assert.equal(capitalize("hello world"), "Hello world");
  });
  context.test("titleCase", function() {
    var titleCase;
    titleCase = Fairmont.titleCase;
    return assert.equal(titleCase("hello woRld"), "Hello World");
  });
  context.test("underscored", function() {
    var underscored;
    underscored = Fairmont.underscored;
    return assert.equal(underscored("Hello World"), "hello_world");
  });
  context.test("camelCase", function() {
    var camelCase;
    camelCase = Fairmont.camelCase;
    return assert.equal(camelCase("Hello World"), "helloWorld");
  });
  context.test("dashed", function() {
    var dashed;
    dashed = Fairmont.dashed;
    return assert.equal(dashed("Hello World"), "hello-world");
  });
  context.test("plainText", function() {
    var plainText;
    plainText = Fairmont.plainText;
    assert.equal(plainText("hello-world"), "hello world");
    return assert.equal(plainText("Hello World"), "hello world");
  });
  context.test("htmlEscape", function() {
    var htmlEscape;
    htmlEscape = Fairmont.htmlEscape;
    return assert.equal(htmlEscape("<a href='foo'>bar & baz</a>"), "&lt;a href=&#39;foo&#39;&gt;bar &amp; baz&lt;&#x2F;a&gt;");
  });
  return context.test("shuffle", function() {
    var input, output, shuffle;
    shuffle = Fairmont.shuffle;
    input = ["a", "b", "c", "d", "e", "f"];
    output = shuffle(input);
    return assert.notEqual(input, output);
  });
});
  
}
,
          
            "b0454bbaecd2c50735f97b03280b9285": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/arrays.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  maxItems: function(value, context) {
    var _this = this;
    return function(data, runtime) {
      if (_this.test_type("array", data)) {
        if (data.length > value) {
          return runtime.error(context);
        }
      }
    };
  },
  minItems: function(value, context) {
    var _this = this;
    return function(data, runtime) {
      if (_this.test_type("array", data)) {
        if (data.length < value) {
          return runtime.error(context);
        }
      }
    };
  },
  items: function(definition, context) {
    var test,
      _this = this;
    if (this.test_type("array", definition)) {
      return test = this._tuple_items(definition, context);
    } else {
      test = this.compile(definition, context);
      return function(data, runtime) {
        var i, item, _i, _len, _results;
        _results = [];
        for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
          item = data[i];
          _results.push(test(item, runtime.child(i)));
        }
        return _results;
      };
    }
  },
  _additionalItems: function(definition, context) {
    var test,
      _this = this;
    if (this.test_type("object", definition)) {
      test = this.compile(definition, context);
    } else if (definition === false) {
      test = function(data, runtime) {
        return runtime.error(context);
      };
    } else {
      throw new Error("The 'additionalItems' attribute must be an object or false");
    }
    return function(data, runtime) {
      var i, item, _i, _len, _results;
      _results = [];
      for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
        item = data[i];
        _results.push(test(item, runtime.child(i)));
      }
      return _results;
    };
  },
  _tuple_items: function(definition, context) {
    var add_item_test, additionalItems, i, schema, tests, _i, _len,
      _this = this;
    additionalItems = context.modifiers.additionalItems;
    if (additionalItems != null) {
      add_item_test = this._additionalItems(additionalItems, context.sibling("additionalItems"));
    } else {
      add_item_test = null;
    }
    tests = [];
    for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
      schema = definition[i];
      tests.push(this.compile(schema, context.child(i.toString())));
    }
    return function(data, runtime) {
      var test, _j, _len1;
      if (_this.test_type("array", data)) {
        for (i = _j = 0, _len1 = tests.length; _j < _len1; i = ++_j) {
          test = tests[i];
          test(data[i], runtime.child(i));
        }
        if ((data.length > tests.length) && add_item_test) {
          return add_item_test(data.slice(tests.length), runtime);
        }
      }
    };
  },
  uniqueItems: function(definition, context) {
    console.error("uniqueItems is a no-op");
    return null;
  }
};
  
}
,
          
            "5c400ce8cc523a0445906026b28a8654": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/attributes.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  $schema: {
    ignore: true
  },
  id: {
    ignore: true
  },
  $ref: {
    ignore: true
  },
  "extends": {
    ignore: true
  },
  "default": {
    ignore: true
  },
  type: {},
  "enum": {},
  disallow: {},
  properties: {},
  required: {
    ignore: true
  },
  dependencies: {},
  patternProperties: {
    modifiers: ["additionalProperties"]
  },
  additionalProperties: {
    modifiers: ["properties", "patternProperties"]
  },
  items: {
    modifiers: ["additionalItems"]
  },
  additionalItems: {
    ignore: true
  },
  maxItems: {},
  minItems: {},
  uniqueItems: {},
  minimum: {
    modifiers: ["exclusiveMinimum"]
  },
  exclusiveMinimum: {
    ignore: true
  },
  maximum: {
    modifiers: ["exclusiveMaximum"]
  },
  exclusiveMaximum: {
    ignore: true
  },
  divisibleBy: {},
  maxLength: {},
  minLength: {},
  pattern: {},
  format: {}
};
  
}
,
          
            "b6ed64f99f59aca97e62bac5ea8885ce": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/comparison.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  "enum": function(definition, context) {
    var _this = this;
    if (this.test_type("array", definition)) {
      return function(data, runtime) {
        var value, _i, _len;
        for (_i = 0, _len = definition.length; _i < _len; _i++) {
          value = definition[_i];
          if (_this.equal(data, value)) {
            return;
          }
        }
        return runtime.error(context);
      };
    } else {
      throw new Error("Value of 'enum' MUST be an Array");
    }
  },
  equal: function(got, want) {
    if (want instanceof Array) {
      return this.array_equal(got, want);
    } else if (this.is_object(want)) {
      return this.object_equal(got, want);
    } else {
      return got === want;
    }
  },
  array_equal: function(got, want) {
    var i, item, _i, _len;
    if (!(got instanceof Array)) {
      return false;
    }
    if (want.length === 0) {
      return true;
    }
    if (got.length !== want.length) {
      return false;
    }
    for (i = _i = 0, _len = want.length; _i < _len; i = ++_i) {
      item = want[i];
      if (!this.equal(got[i], item)) {
        return false;
      }
    }
    return true;
  },
  object_equal: function(got, want) {
    var key, value;
    if (!this.is_object(got)) {
      return false;
    }
    if (Object.keys(got).length !== Object.keys(want).length) {
      return false;
    }
    for (key in want) {
      value = want[key];
      if (!this.equal(got[key], value)) {
        return false;
      }
    }
    return true;
  }
};
  
}
,
          
            "0577f2eabdad74bf4965b5b667a00463": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/numeric.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  divisibleBy: function(value, context) {
    var _this = this;
    return function(data, runtime) {
      if (_this.test_type("number", data)) {
        if (!((data / value) % 1 === 0)) {
          return runtime.error(context);
        }
      }
    };
  },
  minimum: function(value, context) {
    var exclusiveMinimum,
      _this = this;
    exclusiveMinimum = context.modifiers.exclusiveMinimum;
    if (exclusiveMinimum) {
      return function(data, runtime) {
        if (_this.test_type("number", data)) {
          if (!(data > value)) {
            return runtime.error(context);
          }
        }
      };
    } else {
      return function(data, runtime) {
        if (_this.test_type("number", data)) {
          if (!(data >= value)) {
            return runtime.error(context);
          }
        }
      };
    }
  },
  maximum: function(value, context) {
    var exclusiveMaximum,
      _this = this;
    exclusiveMaximum = context.modifiers.exclusiveMaximum;
    if (exclusiveMaximum) {
      return function(data, runtime) {
        if (_this.test_type("number", data)) {
          if (!(data < value)) {
            return runtime.error(context);
          }
        }
      };
    } else {
      return function(data, runtime) {
        if (_this.test_type("number", data)) {
          if (!(data <= value)) {
            return runtime.error(context);
          }
        }
      };
    }
  }
};
  
}
,
          
            "609fc7c924bb8d0357f2cc2f1b90d87f": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/objects.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  dependencies: function(definition, context) {
    var dependency, fn, property, tests,
      _this = this;
    if (!this.test_type("object", definition)) {
      throw new Error("Value of 'dependencies' must be an object");
    } else {
      tests = [];
      for (property in definition) {
        dependency = definition[property];
        if (this.test_type("string", dependency)) {
          tests.push(function(data, runtime) {
            if ((data[property] != null) && (data[dependency] == null)) {
              return runtime.child(property).error(context);
            }
          });
        } else if (this.test_type("array", dependency)) {
          tests.push(function(data, runtime) {
            var item, _i, _len, _results;
            if (data[property] != null) {
              _results = [];
              for (_i = 0, _len = dependency.length; _i < _len; _i++) {
                item = dependency[_i];
                if (data[item] == null) {
                  _results.push(runtime.child(property).error(context));
                } else {
                  _results.push(void 0);
                }
              }
              return _results;
            }
          });
        } else if (this.test_type("object", dependency)) {
          fn = this.compile(dependency, context);
          tests.push(function(data, runtime) {
            if (data[property]) {
              return fn(data, runtime);
            } else {
              return true;
            }
          });
        } else {
          throw new Error("Invalid dependency");
        }
      }
    }
    return function(data, runtime) {
      var test, _i, _len, _results;
      if (_this.test_type("object", data)) {
        _results = [];
        for (_i = 0, _len = tests.length; _i < _len; _i++) {
          test = tests[_i];
          _results.push(test(data, runtime));
        }
        return _results;
      }
    };
  },
  properties: function(definition, context) {
    var new_context, property, required, schema, test, tests,
      _this = this;
    if (!this.test_type("object", definition)) {
      throw new Error("The 'properties' attribute must be an object");
    }
    tests = {};
    required = [];
    for (property in definition) {
      schema = definition[property];
      new_context = context.child(property);
      test = this.compile(schema, new_context);
      tests[property] = test;
      if (schema.required === true) {
        required.push(property);
      }
    }
    return function(data, runtime) {
      var key, value, _i, _len;
      if (_this.test_type("object", data)) {
        for (property in data) {
          value = data[property];
          if (test = tests[property]) {
            test(value, runtime.child(property));
          }
        }
        for (_i = 0, _len = required.length; _i < _len; _i++) {
          key = required[_i];
          if (data[key] === void 0) {
            runtime.error(context.child(key).child("required"));
          }
        }
        return true;
      }
    };
  },
  patternProperties: function(definition, context) {
    var additionalProperties, pattern, schema, tests,
      _this = this;
    additionalProperties = context.modifiers.additionalProperties;
    if (additionalProperties) {
      return null;
    }
    if (!this.test_type("object", definition)) {
      throw new Error("The 'patternProperties' attribute must be an object");
    }
    tests = {};
    for (pattern in definition) {
      schema = definition[pattern];
      tests[pattern] = {
        regex: new RegExp(pattern),
        test: this.compile(schema, context.child(pattern))
      };
    }
    return function(data, runtime) {
      var object, property, value, _results;
      _results = [];
      for (property in data) {
        value = data[property];
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (pattern in tests) {
            object = tests[pattern];
            if (object.regex.test(property)) {
              _results1.push(object.test(value, runtime.child(property)));
            } else {
              _results1.push(void 0);
            }
          }
          return _results1;
        })());
      }
      return _results;
    };
  },
  additionalProperties: function(definition, context) {
    var add_prop_test, pattern, patternProperties, patterns, properties, schema, _ref,
      _this = this;
    _ref = context.modifiers, properties = _ref.properties, patternProperties = _ref.patternProperties;
    if (this.test_type("object", definition)) {
      add_prop_test = this.compile(definition, context);
    } else if (definition === false) {
      add_prop_test = function(data, runtime) {
        return runtime.error(context);
      };
    } else if (definition === void 0) {
      add_prop_test = null;
    } else {
      throw new Error("The 'additionalProperties' attribute must be an object or false");
    }
    patterns = {};
    for (pattern in patternProperties) {
      schema = patternProperties[pattern];
      patterns[pattern] = {
        regex: new RegExp(pattern),
        test: this.compile(schema, context.sibling("patternProperties").child(pattern))
      };
    }
    return function(data, runtime) {
      var explicit, object, patterned, property, value, _results;
      if (_this.test_type("object", data)) {
        _results = [];
        for (property in data) {
          value = data[property];
          explicit = false;
          patterned = false;
          if (properties != null ? properties[property] : void 0) {
            explicit = true;
          }
          if (patterns) {
            for (pattern in patterns) {
              object = patterns[pattern];
              if (object.regex.test(property)) {
                patterned = true;
                object.test(value, runtime.child(property));
              }
            }
          }
          if (!explicit && !patterned && add_prop_test) {
            _results.push(add_prop_test(value, runtime.child(property)));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    };
  }
};
  
}
,
          
            "0bcb84aa4149b90f14b7837fee071e66": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/strings.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
var format_regexes;

module.exports = {
  pattern: function(pattern, context) {
    var regex,
      _this = this;
    regex = new RegExp(pattern);
    return function(data, runtime) {
      if (_this.test_type("string", data)) {
        if (!regex.test(data)) {
          return runtime.error(context);
        }
      }
    };
  },
  minLength: function(value, context) {
    var _this = this;
    return function(data, runtime) {
      if (_this.test_type("string", data)) {
        if (!(data.length >= value)) {
          return runtime.error(context);
        }
      }
    };
  },
  maxLength: function(value, context) {
    var _this = this;
    return function(data, runtime) {
      if (_this.test_type("string", data)) {
        if (!(data.length <= value)) {
          return runtime.error(context);
        }
      }
    };
  },
  format: function(format_name, context) {
    var regex,
      _this = this;
    if (format_name === "regex") {
      return function(data, runtime) {
        var error;
        if (_this.test_type("string", data)) {
          try {
            return new RegExp(data);
          } catch (_error) {
            error = _error;
            return runtime.error(context);
          }
        }
      };
    } else if (regex = format_regexes[format_name]) {
      return (function(regex) {
        return function(data, runtime) {
          if (_this.test_type("string", data)) {
            if (!regex.test(data)) {
              return runtime.error(context);
            }
          }
        };
      })(regex);
    } else {
      throw new Error("Invalid format_name for 'format'");
    }
  }
};

format_regexes = {
  "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
  date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-[0-9]{2}$/,
  time: /^\d{2}:\d{2}:\d{2}$/,
  email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
  "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
  color: /(#?([0-9A-Fa-f]{3,6})\b)|(aqua)|(black)|(blue)|(fuchsia)|(gray)|(green)|(lime)|(maroon)|(navy)|(olive)|(orange)|(purple)|(red)|(silver)|(teal)|(white)|(yellow)|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\))/,
  "host-name": /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/,
  alpha: /^[a-zA-Z]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  "utc-millisec": function(input) {
    return (typeof input === "string") && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
  },
  style: /\s*(.+?):\s*([^;]+);?/g,
  phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
};
  
}
,
          
            "f00f3da0dfcc5edf6f67212dd15b1f13": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3/type.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  type: function(definition, context) {
    var tests, type, _fn, _i, _len,
      _this = this;
    if (this.test_type("array", definition)) {
      tests = [];
      _fn = function(type) {
        var test;
        if (_this.test_type("object", type)) {
          test = _this.compile(type, context);
          return tests.push(function(data, runtime) {
            var temp;
            temp = new runtime.constructor({
              pointer: "",
              errors: []
            });
            test(data, temp);
            return temp.errors.length === 0;
          });
        } else {
          return tests.push(function(data, runtime) {
            return _this.test_type(type, data);
          });
        }
      };
      for (_i = 0, _len = definition.length; _i < _len; _i++) {
        type = definition[_i];
        _fn(type);
      }
      return function(data, runtime) {
        var test, valid, _j, _len1;
        valid = false;
        for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
          test = tests[_j];
          if (test(data, runtime)) {
            valid = true;
          }
        }
        if (valid === false) {
          return runtime.error(context);
        }
      };
    } else if (this.test_type("object", definition)) {
      return this.compile(definition, context);
    } else {
      return function(data, runtime) {
        if (!_this.test_type(definition, data)) {
          return runtime.error(context);
        }
      };
    }
  },
  disallow: function(definition, context) {
    var i, tests, type, _fn, _i, _len,
      _this = this;
    if (this.test_type("array", definition)) {
      tests = [];
      _fn = function(i) {
        var inverse;
        if (_this.test_type("object", type)) {
          inverse = _this.compile(type, context);
          return tests.push(function(data, runtime) {
            var temp;
            temp = new runtime.constructor({
              pointer: "",
              errors: []
            });
            inverse(data, temp);
            if (temp.errors.length === 0) {
              return runtime.error(context);
            }
          });
        } else {
          return tests.push(_this.disallow(type, context));
        }
      };
      for (i = _i = 0, _len = definition.length; _i < _len; i = ++_i) {
        type = definition[i];
        _fn(i);
      }
      return function(data, runtime) {
        var test, _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = tests.length; _j < _len1; _j++) {
          test = tests[_j];
          _results.push(test(data, runtime));
        }
        return _results;
      };
    } else {
      return function(data, runtime) {
        if (_this.test_type(definition, data)) {
          return runtime.error(context);
        }
      };
    }
  },
  is_object: function(data) {
    return (data != null) && (typeof data) === "object" && !(data instanceof Array) && !(data instanceof Date);
  },
  test_type: function(type_name, data) {
    switch (type_name) {
      case "integer":
        return typeof data === "number" && data % 1 === 0;
      case "number":
        return typeof data === "number";
      case "string":
        return typeof data === "string";
      case "object":
        return this.is_object(data);
      case "array":
        return data instanceof Array;
      case "boolean":
        return typeof data === "boolean";
      case "null":
        return data === null;
      case "any":
        return true;
      default:
        throw new Error("Bad type: '" + type_name + "'");
    }
  }
};
  
}
,
          
            "2d4103bff67fa1a99ce7c3e69abe120e": // from: node_modules/patchboard-js/node_modules/jsck/lib/draft3.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
var Context, Runtime, URI, Validator, attributes, deap, escape,
  __slice = [].slice;

URI = require("./uri");

deap = require("deap");

attributes = require("./draft3/attributes");

escape = function(string) {
  return string.replace(/~0/g, "~").replace(/~1/g, "/").replace(/%25/g, "%");
};

Runtime = (function() {
  function Runtime(_arg) {
    this.errors = _arg.errors, this.pointer = _arg.pointer;
  }

  Runtime.prototype.child = function(token) {
    return new this.constructor({
      errors: this.errors,
      pointer: "" + this.pointer + "/" + token
    });
  };

  Runtime.prototype.error = function(context) {
    return this.errors.push({
      document: {
        pointer: this.pointer
      },
      schema: {
        pointer: context.pointer
      }
    });
  };

  return Runtime;

})();

Context = (function() {
  function Context(_arg) {
    this.pointer = _arg.pointer, this.scope = _arg.scope;
  }

  Context.prototype.child = function(token) {
    return new Context({
      pointer: "" + this.pointer + "/" + token,
      scope: this.scope
    });
  };

  Context.prototype.sibling = function(token) {
    var pointer;
    pointer = this.pointer.replace(/\/.*$/, "/" + token);
    return new Context({
      pointer: pointer,
      scope: this.scope
    });
  };

  return Context;

})();

module.exports = Validator = (function() {
  var m, method, module_name, modules, name, _i, _len;

  modules = ["type", "numeric", "comparison", "arrays", "objects", "strings"];

  for (_i = 0, _len = modules.length; _i < _len; _i++) {
    module_name = modules[_i];
    m = require("./draft3/" + module_name);
    for (name in m) {
      method = m[name];
      Validator.prototype[name] = method;
    }
  }

  function Validator() {
    var schema, schemas, _j, _len1;
    schemas = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.uris = {};
    this.media_types = {};
    this.unresolved = {};
    for (_j = 0, _len1 = schemas.length; _j < _len1; _j++) {
      schema = schemas[_j];
      this.add(schema);
    }
  }

  Validator.prototype.add = function(schema) {
    var context, found_schema, key, pointers, ref, scope, uri, _ref, _ref1;
    schema = deap.clone(schema);
    if (schema.id) {
      schema.id = schema.id.replace(/#?$/, "#");
    }
    context = new Context({
      pointer: schema.id || "#",
      scope: schema.id || "#"
    });
    this.compile_references(schema, context);
    _ref = this.unresolved;
    for (ref in _ref) {
      _ref1 = _ref[ref], scope = _ref1.scope, uri = _ref1.uri;
      if (found_schema = this.resolve_ref(uri, scope)) {
        delete this.unresolved[ref];
        this.register(ref, found_schema);
      }
    }
    if (Object.keys(this.unresolved).length > 0) {
      pointers = (function() {
        var _ref2, _results;
        _ref2 = this.unresolved;
        _results = [];
        for (key in _ref2) {
          uri = _ref2[key].uri;
          _results.push(uri);
        }
        return _results;
      }).call(this);
      throw new Error("Unresolvable $ref values: " + (JSON.stringify(pointers)));
    }
    return this.compile(schema, context);
  };

  Validator.prototype.register = function(uri, schema) {
    var media_type;
    this.uris[uri] = schema;
    if (media_type = schema.mediaType) {
      if (media_type !== "application/json") {
        return this.media_types[media_type] = schema;
      }
    }
  };

  Validator.prototype.validate = function(data) {
    return this.validator("#").validate(data);
  };

  Validator.prototype.validator = function(arg) {
    var schema,
      _this = this;
    if (schema = this.find(arg)) {
      return {
        validate: function(data) {
          var attribute, base, error, errors, pointer, runtime, valid, _j, _k, _len1, _ref, _ref1;
          errors = [];
          runtime = new Runtime({
            errors: errors,
            pointer: "#"
          });
          schema._test(data, runtime);
          if (errors.length > 0) {
            for (_j = 0, _len1 = errors.length; _j < _len1; _j++) {
              error = errors[_j];
              _ref = error.schema.pointer.split("/"), base = 2 <= _ref.length ? __slice.call(_ref, 0, _k = _ref.length - 1) : (_k = 0, []), attribute = _ref[_k++];
              pointer = base.join("/");
              error.schema.definition = (_ref1 = _this.resolve_ref(pointer)) != null ? _ref1[attribute] : void 0;
            }
          }
          valid = runtime.errors.length === 0;
          return {
            valid: valid,
            errors: errors
          };
        },
        toJSON: function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return schema;
        }
      };
    } else {
      throw new Error("No schema found for '" + (JSON.stringify(arg)) + "'");
    }
  };

  Validator.prototype.find = function(arg) {
    var media_type, uri;
    if (this.test_type("string", arg)) {
      uri = escape(arg);
      return this.uris[uri];
    } else if (uri = arg.uri) {
      uri = escape(uri);
      return this.uris[uri];
    } else if (media_type = arg.mediaType) {
      return this.media_types[media_type];
    } else {
      return null;
    }
  };

  Validator.prototype.resolve_ref = function(uri, scope) {
    var schema;
    if (schema = this.find(uri)) {
      if (schema.$ref) {
        uri = URI.resolve(scope, schema.$ref);
        return this.resolve_ref(uri);
      } else {
        return schema;
      }
    } else {
      return null;
    }
  };

  Validator.prototype.compile_references = function(schema, context) {
    var attribute, definition, new_context, pointer, scope, uri, _results;
    scope = context.scope, pointer = context.pointer;
    this.register(pointer, schema);
    if (schema.id && schema.id.indexOf("#") === 0) {
      uri = URI.resolve(scope, schema.id);
      schema.id = uri;
      this.register(uri, schema);
    }
    if (this.test_type("object", schema)) {
      _results = [];
      for (attribute in schema) {
        definition = schema[attribute];
        new_context = context.child(attribute);
        switch (attribute) {
          case "$ref":
            uri = URI.resolve(scope, definition);
            if (pointer.indexOf(uri + "/") !== 0) {
              schema.$ref = uri;
              if (schema = this.resolve_ref(uri, scope)) {
                _results.push(this.compile_references(schema, context));
              } else {
                _results.push(this.unresolved[pointer] = {
                  scope: context.scope,
                  uri: uri
                });
              }
            } else {
              _results.push(void 0);
            }
            break;
          case "type":
            if (this.test_type("array", definition)) {
              _results.push(this.type_refs(definition, new_context));
            } else {
              _results.push(void 0);
            }
            break;
          case "properties":
          case "patternProperties":
            _results.push(this.dictionary_refs(definition, new_context));
            break;
          case "items":
            _results.push(this.items_refs(definition, new_context));
            break;
          case "additionalItems":
          case "additionalProperties":
          case "extends":
            _results.push(this.compile_references(definition, context.child(attribute)));
            break;
          default:
            if (!attributes[attribute] && this.test_type("object", definition)) {
              _results.push(this.compile_references(definition, context.child(attribute)));
            } else {
              _results.push(void 0);
            }
        }
      }
      return _results;
    }
  };

  Validator.prototype.type_refs = function(union, context) {
    var i, schema, _j, _len1, _results;
    _results = [];
    for (i = _j = 0, _len1 = union.length; _j < _len1; i = ++_j) {
      schema = union[i];
      if (this.test_type("object", schema)) {
        _results.push(this.compile_references(schema, context.child(i.toString())));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Validator.prototype.dictionary_refs = function(properties, context) {
    var key, schema, _results;
    _results = [];
    for (key in properties) {
      schema = properties[key];
      _results.push(this.compile_references(schema, context.child(key)));
    }
    return _results;
  };

  Validator.prototype.items_refs = function(definition, context) {
    var def, i, _j, _len1, _results;
    if (this.test_type("array", definition)) {
      _results = [];
      for (i = _j = 0, _len1 = definition.length; _j < _len1; i = ++_j) {
        def = definition[i];
        _results.push(this.compile_references(def, context.child(i.toString())));
      }
      return _results;
    } else {
      return this.compile_references(definition, context);
    }
  };

  Validator.prototype.compile = function(schema, context) {
    var attribute, definition, extended, key, new_context, pointer, ref, scope, spec, test, test_function, tests, uri, _j, _len1, _ref, _ref1, _ref2,
      _this = this;
    scope = context.scope, pointer = context.pointer;
    tests = [];
    if (uri = schema.$ref) {
      uri = URI.resolve(scope, uri);
      if (pointer.indexOf(uri) === 0) {
        return this.recursive_test(schema, context);
      }
      schema = this.find(uri);
      if (!schema) {
        throw new Error("No schema found for $ref '" + uri + "'");
      }
    }
    if (extended = schema["extends"]) {
      if (ref = extended.$ref) {
        uri = URI.resolve(scope, ref);
        extended = this.find(uri);
        if (!extended) {
          throw new Error("No schema found for $ref '" + ref + "'");
        }
      }
      delete schema["extends"];
      if (this.test_type("array", extended)) {
        deap.merge.apply(deap, [schema].concat(__slice.call(extended)));
      } else {
        deap.merge(schema, extended);
      }
    }
    for (attribute in schema) {
      definition = schema[attribute];
      if (spec = attributes[attribute]) {
        if (!spec.ignore) {
          new_context = context.child(attribute);
          new_context.modifiers = {};
          if (spec.modifiers) {
            _ref = spec.modifiers;
            for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
              key = _ref[_j];
              new_context.modifiers[key] = schema[key];
            }
          }
          if (test = this[attribute](definition, new_context)) {
            test.pointer = new_context.pointer;
            tests.push(test);
          }
        }
      } else {
        if (this.test_type("object", definition)) {
          this.compile(definition, context.child(attribute));
        }
      }
    }
    test_function = function(data, runtime) {
      var _k, _len2, _results;
      _results = [];
      for (_k = 0, _len2 = tests.length; _k < _len2; _k++) {
        test = tests[_k];
        _results.push(test(data, runtime));
      }
      return _results;
    };
    if (schema.id) {
      uri = URI.resolve(scope, schema.id);
      if ((_ref1 = this.find(uri)) != null) {
        _ref1._test = test_function;
      }
    }
    if ((_ref2 = this.find(pointer)) != null) {
      _ref2._test = test_function;
    }
    return test_function;
  };

  Validator.prototype.recursive_test = function(schema, _arg) {
    var pointer, scope, uri,
      _this = this;
    scope = _arg.scope, pointer = _arg.pointer;
    uri = URI.resolve(scope, schema.$ref);
    if (schema = this.find(uri)) {
      return function(data, runtime) {
        return schema._test(data, runtime);
      };
    } else {
      throw new Error("No schema found for $ref '" + uri + "'");
    }
  };

  return Validator;

})();
  
}
,
          
            "3bb228a9f0315ca34fa56350046e7d89": // from: node_modules/patchboard-js/node_modules/jsck/lib/index.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
module.exports = {
  draft3: require("./draft3")
};
  
}
,
          
            "e04f7ebdcfb9b101cdeec3adcff8500c": // from: node_modules/patchboard-js/node_modules/jsck/lib/uri.js
function(exports,require,module,__filename,__dirname) {
// Generated by CoffeeScript 1.6.3
var is_absolute, is_url, resolve;

is_absolute = function(string) {
  return /^[\w\d+.-]+:/.test(string);
};

is_url = function(string) {
  return /^[\w\d+.-]+:\/\//.test(string);
};

resolve = function(scope, uri) {
  var main, _frag, _ref;
  if (is_absolute(uri)) {
    return uri;
  } else {
    scope = scope.replace(/#$/, "");
    if (uri.indexOf("#") === 0) {
      _ref = scope.split("#"), main = _ref[0], _frag = _ref[1];
      return main + uri;
    } else {
      if (is_url(scope) || scope.indexOf("/") !== -1) {
        return scope.replace(/\/[^/]+$/, "/" + uri);
      } else {
        return "" + scope + "/" + uri;
      }
    }
  }
};

module.exports = {
  is_absolute: is_absolute,
  is_url: is_url,
  resolve: resolve
};
  
}
,
          
            "6447cf720a085928a1cdd64e0fb5ef34": // from: node_modules/patchboard-js/node_modules/jsck/node_modules/deap/index.js
function(exports,require,module,__filename,__dirname) {
var lib = require('./lib/deap');

var deap = module.exports = lib.extend;

deap(deap, {
	clone: lib.clone,
	extend: lib.extend,
	update: lib.update,
	merge: lib.merge,
	cloneShallow: lib.cloneShallow,
	extendShallow: lib.extendShallow,
	updateShallow: lib.updateShallow,
	mergeShallow: lib.mergeShallow
});
  
}
,
          
            "e29b3a1cdea6fad60c14985bbb438e39": // from: node_modules/patchboard-js/node_modules/jsck/node_modules/deap/lib/deap.js
function(exports,require,module,__filename,__dirname) {
var typeOf = require('./typeof'),
	slice = Array.prototype.slice;

module.exports = {
	clone: deepClone,
	cloneShallow: clone,
	extend: deepExtend,
	extendShallow: extend,
	update: deepUpdate,
	updateShallow: update,
	merge: deepMerge,
	mergeShallow: merge
};

function clone(val) {
	switch(typeOf(val)) {
		case 'object':
			var args = slice.call(arguments);
			args.unshift({});
			return extend.apply(null, args);
		case 'array':
			return [].concat(val);
		case 'date':
			return new Date(val.getTime());
		case 'regexp':
			return new RegExp(val);
		default:
			return val;
	}
}

function deepClone(val) {
	switch(typeOf(val)) {
		case 'object':
			var args = slice.call(arguments);
			args.unshift({});
			return deepExtend.apply(null, args);
		case 'array':
			return val.map(function(v) { return deepClone(v); });
		default:
			return clone(val);
	}
}

function extend(a, b /*, [b2..n] */) {
	slice.call(arguments, 1).forEach(function(b) {
		Object.keys(b).forEach(function(p) {
			a[p] = b[p];
		});
	});
	return a;
}

function deepExtend(a, b /*, [b2..n] */) {
	slice.call(arguments, 1).forEach(function(b) {
		Object.keys(b).forEach(function(p) {
			if(typeOf(b[p]) === 'object' && typeOf(a[p]) === 'object')
				deepExtend(a[p], b[p]);
			else
				a[p] = deepClone(b[p]);
		});
	});
	return a;
}

function update(a, b /*, [b2..n] */) {
	slice.call(arguments, 1).forEach(function(b) {
		Object.keys(b).forEach(function(p) {
			if(a.hasOwnProperty(p)) a[p] = b[p];
		});
	});
	return a;
}

function deepUpdate(a, b /*, [b2..n] */) {
	slice.call(arguments, 1).forEach(function(b) {
		var ap, bp, ta, tb;
		Object.keys(b).forEach(function(p) {
			if(a.hasOwnProperty(p)) {
				ap = a[p];
				bp = b[p];
				ta = typeOf(ap);
				tb = typeOf(bp);
				if(tb === 'object' && ta === 'object')
					deepUpdate(ap, bp);
				else if(tb === 'array' && ta === 'array') {
					ap.length = 0;
					ap.push.apply(ap, bp.map(function(v) { return deepClone(v); }));
				} else
					a[p] = deepClone(bp);
			}
		});
	});
	return a;
}

function merge(a, b /*, [b2..n] */) {
	slice.call(arguments, 1).forEach(function(b) {
		Object.keys(b).forEach(function(p) {
			if(!a.hasOwnProperty(p)) a[p] = b[p];
		});
	});
	return a;
}

function deepMerge(a, b /*, [b2..n] */) {
	slice.call(arguments, 1).forEach(function(b) {
		var ap, bp, ta, tb;
		Object.keys(b).forEach(function(p) {
			ap = a[p];
			bp = b[p];
			ta = typeOf(ap);
			tb = typeOf(bp);
			if(tb === 'object' && ta === 'object')
				deepMerge(ap, bp);
			else if(!a.hasOwnProperty(p))
				a[p] = deepClone(bp);
		});
	});
	return a;
}
  
}
,
          
            "e06990ed80036013bdbc22008581eb04": // from: node_modules/patchboard-js/node_modules/jsck/node_modules/deap/lib/typeof.js
function(exports,require,module,__filename,__dirname) {

module.exports = function(obj) {
	var t = typeof obj;
	if(t !== 'object') return t;

	// typeof null == 'object' so check seperately
	if(obj === null) return 'null';

	// typeof new Array|String|Number|Boolean|RegExp == 'object' so check seperately
	switch(obj.constructor) {
		case Array:		return 'array';
		case String:	return 'string';
		case Number:	return 'number';
		case Boolean:	return 'boolean';
		case RegExp:	return 'regexp';
		case Date:		return 'date';
	}
	return 'object';
};
  
}
,
          
            "aa52bf0246ac9706bfbbedbfdf306cf6": // from: node_modules/patchboard-js/node_modules/jsck/node_modules/deap/shallow.js
function(exports,require,module,__filename,__dirname) {
var lib = require('./lib/deap');

var deap = module.exports = lib.extendShallow;

deap(deap, {
	clone: lib.cloneShallow,
	extend: lib.extendShallow,
	update: lib.updateShallow,
	merge: lib.mergeShallow
});
  
}
,
          
            "36ca37817bdc9c1a5fd549a8c3c88b37": // from: node_modules/patchboard-js/src/action.coffee
function(exports,require,module,__filename,__dirname) {
var Action, Evie, Request, type,
  __slice = [].slice;

Request = require("./request");

type = require("fairmont").type;

Evie = require("evie").Evie;

module.exports = Action = (function() {

  function Action(client, name, definition) {
    var request, response, _ref;
    this.client = client;
    this.name = name;
    this.definition = definition;
    this.api = this.client.api;
    _ref = this.definition, request = _ref.request, response = _ref.response;
    this.status = (response != null ? response.status : void 0) || 200;
    if ((request != null ? request.type : void 0) != null) {
      this.request_schema = this.api.schema_manager.find({
        mediaType: request.type
      });
    }
    if ((response != null ? response.type : void 0) != null) {
      this.response_schema = this.api.schema_manager.find({
        mediaType: response.type
      });
    }
    this._base_headers = this.base_headers(this.definition);
  }

  Action.prototype.base_headers = function() {
    var headers;
    headers = {
      "User-Agent": "patchboard-js"
    };
    if (this.request_schema != null) {
      headers["Content-Type"] = this.request_schema.mediaType;
    }
    if (this.response_schema != null) {
      headers["Accept"] = this.response_schema.mediaType;
    }
    return headers;
  };

  Action.prototype.create_request = function() {
    var args, auth_type, body, credential, key, options, request, resource, url, value, _ref, _ref1;
    url = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    resource = this;
    options = this.process_args(args);
    request = {
      url: url,
      method: this.definition.method,
      headers: {}
    };
    if ((body = this.prepare_body(options)) != null) {
      request.body = body;
    }
    _ref = this._base_headers;
    for (key in _ref) {
      value = _ref[key];
      request.headers[key] = value;
    }
    auth_type = (_ref1 = this.definition.request) != null ? _ref1.authorization : void 0;
    if ((auth_type != null) && (this.client.authorizer != null)) {
      credential = this.client.authorizer(auth_type, this.name);
      request.headers["Authorization"] = "" + auth_type + " " + credential;
    }
    return request;
  };

  Action.prototype.request = function() {
    var args, callback, events, options, request, url, _args, _i,
      _this = this;
    url = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    events = new Evie();
    _args = 2 <= args.length ? __slice.call(args, 0, _i = args.length - 1) : (_i = 0, []), callback = args[_i++];
    if (typeof callback === "function") {
      args = _args;
      events.on("error", function(error) {});
    } else {
      callback = void 0;
    }
    try {
      options = this.create_request.apply(this, [url].concat(__slice.call(args)));
    } catch (error) {
      if (typeof callback === "function") {
        callback(error);
      }
      events.emit("error", error);
      return;
    }
    request = new Request(options);
    request.on("error", function(error) {
      if (typeof callback === "function") {
        callback(error);
      }
      return events.emit("error", error);
    });
    request.on("success", function(response) {
      if (response.status !== _this.status) {
        error = new Error("Unexpected response status: " + response.status);
        error.status = response.status;
        error.response = response;
        if (typeof callback === "function") {
          callback(error);
        }
        return events.emit("error", error);
      } else {
        if (_this.response_schema != null) {
          try {
            response.data = JSON.parse(response.body);
          } catch (error) {
            error = new Error("Unparseable response body");
            return;
          }
          response.resource = _this.api.decorate(_this.response_schema, response.data);
          if (typeof callback === "function") {
            callback(null, response);
          }
          return events.emit("success", response);
        }
      }
    });
    return events;
  };

  Action.prototype.process_args = function(args) {
    var content_required, options, signature;
    options = {};
    signature = (args.map(function(arg) {
      return type(arg);
    })).join(".");
    content_required = this.request_schema;
    if (content_required != null) {
      switch (signature) {
        case "string":
          options.body = args[0];
          break;
        case "object":
          options.content = args[0];
          break;
        case "array":
          options.content = args[0];
          break;
        default:
          throw new Error("Invalid arguments for action; content required");
      }
    } else {
      switch (signature) {
        case "":
          args;
          break;
        default:
          throw new Error("Invalid arguments for action");
      }
    }
    return options;
  };

  Action.prototype.prepare_body = function(options) {
    if (options.content != null) {
      return JSON.stringify(options.content);
    } else if (options.body != null) {
      return options.body;
    } else {
      return void 0;
    }
  };

  return Action;

})();
  
}
,
          
            "9008cb802dd4e9cb3efea51b7966e4ec": // from: node_modules/patchboard-js/src/api.coffee
function(exports,require,module,__filename,__dirname) {
var API, Mapping, SchemaManager;

SchemaManager = require("./schema_manager");

module.exports = API = (function() {

  function API(_arg) {
    var definition, mapping, mappings, name, _ref;
    this.service_url = _arg.service_url, mappings = _arg.mappings, this.resources = _arg.resources, this.schemas = _arg.schemas;
    if (!(mappings && this.resources && this.schemas)) {
      throw new Error("API specification must provide mappings, resources, and schemas");
    }
    this.mappings = {};
    for (name in mappings) {
      mapping = mappings[name];
      this.mappings[name] = new Mapping(this, mapping);
    }
    _ref = this.resources;
    for (name in _ref) {
      definition = _ref[name];
      definition.name = name;
    }
    this.schema_manager = (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args), t = typeof result;
      return t == "object" || t == "function" ? result || child : child;
    })(SchemaManager, this.schemas, function(){});
  }

  API.prototype.decorate = function(schema, data) {
    var constructor, mapping, name, _data, _ref;
    if ((name = (_ref = schema.id) != null ? _ref.split("#")[1] : void 0) != null) {
      if ((mapping = this.mappings[name]) != null) {
        constructor = mapping.constructor;
        _data = data;
        if (mapping.query != null) {
          data = function(params) {
            if (_data.url != null) {
              params.url = _data.url;
            }
            return new constructor({
              url: mapping.generate_url(params)
            });
          };
        } else {
          data = new constructor(_data);
        }
      }
    }
    return this._decorate(schema, data) || data;
  };

  API.prototype._decorate = function(schema, data) {
    var addprop, i, item, key, ref, result, value, _i, _len, _ref, _ref1, _results;
    if (!(schema != null) || !(data != null)) {
      return;
    }
    if (ref = schema.$ref) {
      if ((schema = this.schema_manager.find(ref)) != null) {
        return this.decorate(schema, data);
      } else {
        console.error("Can't find ref:", ref);
        return data;
      }
    } else {
      if (schema.type === "array") {
        if (schema.items != null) {
          _results = [];
          for (i = _i = 0, _len = data.length; _i < _len; i = ++_i) {
            item = data[i];
            if ((result = this.decorate(schema.items, item)) != null) {
              _results.push(data[i] = result);
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      } else {
        switch (schema.type) {
          case "string":
          case "number":
          case "integer":
          case "boolean":
            return null;
          default:
            _ref = schema.properties;
            for (key in _ref) {
              value = _ref[key];
              if ((result = this.decorate(value, data[key])) != null) {
                data[key] = result;
              }
            }
            if (addprop = schema.additionalProperties) {
              for (key in data) {
                value = data[key];
                if (!((_ref1 = schema.properties) != null ? _ref1[key] : void 0)) {
                  data[key] = this.decorate(addprop, value);
                }
              }
            }
            return data;
        }
      }
    }
  };

  return API;

})();

API.Mapping = Mapping = (function() {

  function Mapping(api, _arg) {
    this.name = _arg.name, this.resource = _arg.resource, this.url = _arg.url, this.template = _arg.template, this.path = _arg.path, this.query = _arg.query;
    this.service_url = api.service_url;
    if (!(this.resource != null)) {
      this.resource = this.name;
    }
    if (!((this.url != null) || (this.path != null) || (this.template != null))) {
      throw new Error("Mapping is missing any form of URL specification");
    }
    if (!((resource = api.resources[this.resource]) != null)) {
      throw new Error("Mapping specifies a resource that is not defined");
    }
    this.resource = resource;
  }

  Mapping.prototype.generate_url = function(params) {
    var key, keys, out, part, parts, path, query, query_string, schema, string, template, url, _i, _j, _len, _len1;
    if (params == null) {
      params = {};
    }
    url = this.service_url;
    path = "";
    if (params.constructor === String) {
      url = params;
    } else if (params.url) {
      url = params.url;
    } else if (this.url != null) {
      url = this.url;
    } else if ((template = this.template) != null) {
      parts = template.split("/");
      out = [];
      for (_i = 0, _len = parts.length; _i < _len; _i++) {
        part = parts[_i];
        if (part.indexOf(":") === 0) {
          key = part.slice(1);
          if ((string = params[key]) != null) {
            out.push(string);
          } else {
            throw new Error("Missing key: '" + key + "' in params: " + (JSON.stringify(params)));
          }
        } else {
          out.push(part);
        }
      }
      url = url + out.join("/");
    } else if (this.path != null) {
      path = this.path;
    } else {
      throw new Error("Unusable URL mapping.  Must have url, path, or template field.\nMapping: " + (JSON.stringify(this, null, 2)));
    }
    query_string = "";
    if ((query = this.query) != null) {
      parts = [];
      keys = Object.keys(query).sort();
      for (_j = 0, _len1 = keys.length; _j < _len1; _j++) {
        key = keys[_j];
        schema = query[key];
        if ((string = params[key]) != null) {
          parts.push("" + key + "=" + string);
        }
      }
      if (parts.length > 0) {
        query_string = "?" + (parts.join('&'));
      } else {
        query_string = "";
      }
    }
    return encodeURI(url + path + query_string);
  };

  return Mapping;

})();
  
}
,
          
            "0a2349ef82f9b98a105186e3b514490a": // from: node_modules/patchboard-js/src/client.coffee
function(exports,require,module,__filename,__dirname) {
var API, Action, Client, Request,
  __slice = [].slice;

Request = require("./request");

API = require("./api");

Action = require("./action");

module.exports = Client = (function() {

  Client.Request = Request;

  Client.discover = function() {
    var args, callback, options, url,
      _this = this;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (args.length === 2) {
      url = args[0], callback = args[1];
      options = {};
    } else if (args.length === 3) {
      url = args[0], options = args[1], callback = args[2];
    }
    if (url.constructor !== String) {
      throw new Error("Discovery URL must be a string");
    }
    options = {
      url: url,
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    };
    return new Request(options, function(error, response) {
      var client;
      if (error != null) {
        return callback(error);
      } else {
        if (response.data != null) {
          client = new Client(response.data, options);
          return callback(null, client);
        } else {
          return callback(new Error("Unparseable response body"));
        }
      }
    });
  };

  function Client(api, options) {
    this.options = options != null ? options : {};
    this.authorizer = this.options.authorizer;
    this.api = new API(api);
    this.create_resource_constructors(this.api.resources, this.api.mappings);
    this.resources = this.create_endpoints(this.api.mappings);
  }

  Client.prototype.create_endpoints = function(mappings) {
    var endpoints, mapping, name, _fn,
      _this = this;
    endpoints = {};
    _fn = function(name, mapping) {
      var constructor, path, query, template, url;
      url = mapping.url, query = mapping.query, path = mapping.path, template = mapping.template;
      constructor = mapping.constructor;
      if ((template != null) || (query != null)) {
        return endpoints[name] = function(params) {
          if (params == null) {
            params = {};
          }
          return new constructor({
            url: mapping.generate_url(params)
          });
        };
      } else if (path != null) {
        return endpoints[name] = new constructor({
          url: mapping.generate_url()
        });
      } else if (url != null) {
        return endpoints[name] = new constructor({
          url: url
        });
      } else {
        return console.error("Unexpected mapping:", name, mapping);
      }
    };
    for (name in mappings) {
      mapping = mappings[name];
      _fn(name, mapping);
    }
    return endpoints;
  };

  Client.prototype.create_resource_constructors = function(definitions, mappings) {
    var alias, constructor, constructors, definition, mapping, name, _i, _len, _ref;
    constructors = {};
    for (name in mappings) {
      mapping = mappings[name];
      definition = mapping.resource;
      constructor = this.resource_constructor({
        mapping: mapping,
        definition: definition
      });
      mapping.constructor = constructor;
      constructors[name] = constructor;
      if (definition.aliases != null) {
        _ref = definition.aliases;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          alias = _ref[_i];
          constructors[alias] = constructor;
        }
      }
    }
    return constructors;
  };

  Client.prototype.resource_constructor = function(_arg) {
    var client, constructor, def, definition, mapping, method, name, _fn, _ref, _ref1;
    mapping = _arg.mapping, definition = _arg.definition;
    client = this;
    constructor = function(data) {
      var key, value;
      if (data == null) {
        data = {};
      }
      if ((data != null ? data.constructor : void 0) === String) {
        this.url = data;
      } else {
        for (key in data) {
          value = data[key];
          this[key] = value;
        }
      }
      return this;
    };
    constructor.prototype._actions = {};
    constructor.prototype.resource_type = definition.name;
    Object.defineProperty(constructor.prototype, "patchboard_client", {
      value: this,
      enumerable: false
    });
    _ref = definition.actions;
    _fn = function(name, def) {
      var action;
      action = constructor.prototype._actions[name] = new Action(client, name, def);
      return constructor.prototype[name] = function() {
        var args;
        args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
        return action.request.apply(action, [this.url].concat(__slice.call(args)));
      };
    };
    for (name in _ref) {
      def = _ref[name];
      _fn(name, def);
    }
    _ref1 = this.resource_methods;
    for (name in _ref1) {
      method = _ref1[name];
      constructor.prototype[name] = method;
    }
    return constructor;
  };

  Client.prototype.resource_methods = {
    curl: function() {
      var action, agent, args, body, command, header, headers, method, name, request, url, value;
      name = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      action = this._actions[name];
      request = action.create_request.apply(action, [this.url].concat(__slice.call(args)));
      method = request.method, url = request.url, headers = request.headers, body = request.body;
      agent = headers["User-Agent"];
      command = [];
      command.push("curl -v -A '" + agent + "' -X " + method);
      for (header in headers) {
        value = headers[header];
        if (header !== "User-Agent") {
          command.push("  -H '" + header + ": " + value + "'");
        }
      }
      if (body != null) {
        command.push("  -d " + (JSON.stringify(body)));
      }
      command.push("  " + url);
      return command.join(" \\\n");
    }
  };

  return Client;

})();
  
}
,
          
            "45c85f4b833e42cee72458133318b91d": // from: node_modules/patchboard-js/src/request.coffee
function(exports,require,module,__filename,__dirname) {
var Evie, Request, Response, ResponseContent, URL, corsetCase, http, https, zlib,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

http = require("http");

https = require("https");

URL = require("url");

try {
  zlib = require("zlib");
} catch (error) {
  zlib = null;
}

Evie = require("evie").Evie;

corsetCase = function(string) {
  return string.toLowerCase().replace("_", "-").replace(/(^|-)(\w)/g, function(s) {
    return s.toUpperCase();
  });
};

module.exports = Request = (function(_super) {

  __extends(Request, _super);

  function Request(options, handler) {
    var callback, client, hostname, parameters, path, port, protocol, raw, timeout, _ref, _ref1, _ref2,
      _this = this;
    this.url = options.url, this.method = options.method, this.headers = options.headers, this.body = options.body, timeout = options.timeout, this.redirects = options.redirects;
    if ((_ref = this.headers) == null) {
      this.headers = {};
    }
    this.method = this.method.toUpperCase();
    if ((_ref1 = this.redirects) == null) {
      this.redirects = 1;
    }
    _ref2 = URL.parse(this.url), protocol = _ref2.protocol, hostname = _ref2.hostname, port = _ref2.port, path = _ref2.path;
    client = (protocol === "http:" ? http : https);
    parameters = {
      host: hostname,
      port: port,
      path: path,
      method: this.method,
      headers: this.headers
    };
    if ((this.body != null) && (typeof Buffer !== "undefined" && Buffer !== null)) {
      this.headers["Content-Length"] = Buffer.byteLength(this.body);
    }
    callback = function(error, response) {
      if (handler != null) {
        handler(error, response);
      }
      if (error != null) {
        return _this.emit("error", error);
      } else {
        return _this.emit("success", response);
      }
    };
    raw = client.request(parameters, function(response) {
      switch (response.statusCode) {
        case 300:
        case 301:
        case 302:
        case 303:
        case 307:
          return _this.redirect(_this, response, callback);
        case 304:
        case 305:
          return callback(new Error("" + response.statusCode + " handling not yet implemented"));
        default:
          return response = new Response(response, callback);
      }
    });
    raw.on("error", function(error) {
      return callback(error);
    });
    if (timeout != null) {
      raw.setTimeout(timeout, function() {
        return raw.abort();
      });
    }
    if (this.body != null) {
      raw.write(this.body.toString());
    }
    raw.end();
  }

  Request.prototype.redirect = function(request, response, callback) {
    var body, headers, location, method, redirects, timeout;
    method = request.method, headers = request.headers, body = request.body, timeout = request.timeout, redirects = request.redirects;
    if (!(method === "GET" || method === "HEAD")) {
      return callback(new Error("Received redirect for method other than GET or HEAD"));
    } else if (redirects === 0) {
      return callback(new Error("Exceeded allowed number of redirects"));
    } else {
      location = response.headers["Location"] || response.headers["location"];
      if (location != null) {
        return new Request({
          url: location,
          redirects: redirects - 1,
          method: method,
          headers: headers,
          body: body,
          timeout: timeout
        }, callback);
      } else {
        return callback(new Error("Redirect response did not provide Location"));
      }
    }
  };

  return Request;

})(Evie);

Response = (function() {

  function Response(raw, callback) {
    var key, value, _ref,
      _this = this;
    this.raw = raw;
    this._content = new ResponseContent(this);
    this.status = this.raw.statusCode;
    this.headers = {};
    this._normalized = {};
    _ref = this.raw.headers;
    for (key in _ref) {
      value = _ref[key];
      this.headers[key] = value;
      this._normalized[corsetCase(key)] = value;
    }
    this.raw.on("end", function() {
      return _this._content.process(function(content) {
        _this.content = content;
        _this.body = _this.content.body;
        _this.data = _this.content.data;
        return callback(null, _this);
      });
    });
  }

  Response.prototype.getHeader = function(name) {
    return this.headers[name] || this._normalized[corsetCase(name)];
  };

  return Response;

})();

ResponseContent = (function() {

  function ResponseContent(response) {
    var encoding, headers,
      _this = this;
    this.response = response;
    this.raw = this.response.raw;
    this.chunks = [];
    this.length = 0;
    headers = this.raw.headers;
    this.type = headers["Content-Type"] || headers["content-type"];
    switch ((encoding = headers["Content-Encoding"] || headers["content-encoding"])) {
      case "gzip":
        this.encoding = encoding;
        break;
      default:
        this.encoding = null;
    }
    this.raw.on("data", function(chunk) {
      _this.chunks.push(chunk);
      return _this.length += chunk.length;
    });
  }

  ResponseContent.prototype.process = function(callback) {
    var _this = this;
    if (typeof Buffer !== "undefined" && Buffer !== null) {
      this.buffer = Buffer.concat(this.chunks, this.length);
    } else {
      this.buffer = this.chunks.join("");
    }
    return this.process_encoding(function() {
      return _this.process_type(callback);
    });
  };

  ResponseContent.prototype.process_encoding = function(callback) {
    var _this = this;
    if ((this.encoding != null) && (zlib != null)) {
      return zlib.gunzip(this.buffer, function(error, buffer) {
        _this.body = buffer.toString("utf-8");
        return callback();
      });
    } else {
      this.body = this.buffer.toString("utf-8");
      return callback();
    }
  };

  ResponseContent.prototype.process_type = function(callback) {
    if (this.type != null) {
      if (/json/.test(this.type)) {
        try {
          this.data = JSON.parse(this.body);
        } catch (error) {
          this.data = void 0;
        }
      }
    }
    return callback({
      buffer: this.buffer,
      body: this.body,
      data: this.data
    });
  };

  return ResponseContent;

})();
  
}
,
          
            "208a52b4693a2e85d863f928eb8a377d": // from: node_modules/patchboard-js/src/schema_manager.coffee
function(exports,require,module,__filename,__dirname) {
var JSCK, SchemaManager,
  __slice = [].slice;

JSCK = require("jsck");

module.exports = SchemaManager = (function() {

  function SchemaManager() {
    var definition, definitions, name, schema, schemas, _i, _len, _ref;
    schemas = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    this.schemas = schemas;
    _ref = this.schemas;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      schema = _ref[_i];
      if ((definitions = schema.definitions) != null) {
        for (name in definitions) {
          definition = definitions[name];
          definition.id || (definition.id = "#" + name);
        }
      }
    }
    this.jsck = (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args), t = typeof result;
      return t == "object" || t == "function" ? result || child : child;
    })(JSCK.draft3, this.schemas, function(){});
    this.uris = this.jsck.references;
  }

  SchemaManager.prototype.find = function() {
    var args, _ref;
    args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (_ref = this.jsck).find.apply(_ref, args);
  };

  return SchemaManager;

})();
  
}
,
          
            "c4f9141dbd0d7a4e3dd3d1dc0a64c667": // from: 
function(exports,require,module,__filename,__dirname) {
// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

// UTILITY
var util = require('util');
var pSlice = Array.prototype.slice;

// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.message = options.message;
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  var stackStartFunction = options.stackStartFunction || fail;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function replacer(key, value) {
  if (value === undefined) {
    return '' + value;
  }
  if (typeof value === 'number' && (isNaN(value) || !isFinite(value))) {
    return value.toString();
  }
  if (typeof value === 'function' || value instanceof RegExp) {
    return value.toString();
  }
  return value;
}

function truncate(s, n) {
  if (typeof s == 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}

assert.AssertionError.prototype.toString = function() {
  if (this.message) {
    return [this.name + ':', this.message].join(' ');
  } else {
    return [
      this.name + ':',
      truncate(JSON.stringify(this.actual, replacer), 128),
      this.operator,
      truncate(JSON.stringify(this.expected, replacer), 128)
    ].join(' ');
  }
};

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!!!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

function _deepEqual(actual, expected) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
    if (actual.length != expected.length) return false;

    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) return false;
    }

    return true;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (actual instanceof RegExp && expected instanceof RegExp) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (typeof actual != 'object' && typeof expected != 'object') {
    return actual == expected;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b) {
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b);
  }
  try {
    var ka = Object.keys(a),
        kb = Object.keys(b),
        key, i;
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key])) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (expected instanceof RegExp) {
    return expected.test(actual);
  } else if (actual instanceof expected) {
    return true;
  } else if (expected.call({}, actual) === true) {
    return true;
  }

  return false;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  try {
    block();
  } catch (e) {
    actual = e;
  }

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  if (!shouldThrow && expectedException(actual, expected)) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws.apply(this, [true].concat(pSlice.call(arguments)));
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/message) {
  _throws.apply(this, [false].concat(pSlice.call(arguments)));
};

assert.ifError = function(err) { if (err) {throw err;}};
  
}
,
          
            "5d6e2c2d895132330e91af96bc1409c7": // from: 
function(exports,require,module,__filename,__dirname) {
//
// Adapted from http-browserify
//


var http = module.exports;
var EventEmitter = require('events').EventEmitter;
var Request;

http.request = function (params, cb) {
    if (!params) params = {};
    if (!params.host) params.host = window.location.host.split(':')[0];
    if (!params.port) params.port = window.location.port;
    
    var req = new Request(new xhrHttp, params);
    if (cb) req.on('response', cb);
    return req;
};

http.get = function (params, cb) {
    params.method = 'GET';
    var req = http.request(params, cb);
    req.end();
    return req;
};

http.Agent = function () {};
http.Agent.defaultMaxSockets = 4;

var xhrHttp = (function () {
    if (typeof window === 'undefined') {
        throw new Error('no window object present');
    }
    else if (window.XMLHttpRequest) {
        return window.XMLHttpRequest;
    }
    else if (window.ActiveXObject) {
        var axs = [
            'Msxml2.XMLHTTP.6.0',
            'Msxml2.XMLHTTP.3.0',
            'Microsoft.XMLHTTP'
        ];
        for (var i = 0; i < axs.length; i++) {
            try {
                var ax = new(window.ActiveXObject)(axs[i]);
                return function () {
                    if (ax) {
                        var ax_ = ax;
                        ax = null;
                        return ax_;
                    }
                    else {
                        return new(window.ActiveXObject)(axs[i]);
                    }
                };
            }
            catch (e) {}
        }
        throw new Error('ajax not supported in this browser')
    }
    else {
        throw new Error('ajax not supported in this browser');
    }
})();


Request = (function() {
  var EventEmitter = require('events').EventEmitter;
  var Response;
  var concatStream;

  var Request = function (xhr, params) {
      var self = this;
      self.xhr = xhr;
      self.body = concatStream()

      var uri = params.host + ':' + params.port + (params.path || '/');

      xhr.open(
          params.method || 'GET',
          (params.scheme || 'http') + '://' + uri,
          true
      );

      if (params.headers) {
          Object.keys(params.headers).forEach(function (key) {
              if (!self.isSafeRequestHeader(key)) return;
              var value = params.headers[key];
              if (Array.isArray(value)) {
                  value.forEach(function (v) {
                      xhr.setRequestHeader(key, v);
                  });
              }
              else xhr.setRequestHeader(key, value)
          });
      }

      var res = new Response(xhr);
      res.on('ready', function () {
          self.emit('response', res);
      });

      xhr.onreadystatechange = function () {
          res.handle(xhr);
      };
  };

  Request.prototype = new EventEmitter;

  Request.prototype.setHeader = function (key, value) {
      if ((Array.isArray && Array.isArray(value))
      || value instanceof Array) {
          for (var i = 0; i < value.length; i++) {
              this.xhr.setRequestHeader(key, value[i]);
          }
      }
      else {
          this.xhr.setRequestHeader(key, value);
      }
  };

  Request.prototype.write = function (s) {
      this.body.write(s);
  };

  Request.prototype.end = function (s) {
      if (s !== undefined) this.body.write(s);
      this.body.end()
      this.xhr.send(this.body.getBody());
  };

  // Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
  Request.unsafeHeaders = [
      "accept-charset",
      "accept-encoding",
      "access-control-request-headers",
      "access-control-request-method",
      "connection",
      "content-length",
      "cookie",
      "cookie2",
      "content-transfer-encoding",
      "date",
      "expect",
      "host",
      "keep-alive",
      "origin",
      "referer",
      "te",
      "trailer",
      "transfer-encoding",
      "upgrade",
      "user-agent",
      "via"
  ];

  Request.prototype.isSafeRequestHeader = function (headerName) {
      if (!headerName) return false;
      return (Request.unsafeHeaders.indexOf(headerName.toLowerCase()) === -1)
  };
  
  Response = (function() {
    
    var EventEmitter = require('events').EventEmitter;

    var Response = function (xhr) {
        this.xhr = xhr;
        this.offset = 0;
    };

    Response.prototype = new EventEmitter;

    var capable = {
        streaming : true,
        status2 : true
    };

    function parseHeaders (xhr) {
        var lines = xhr.getAllResponseHeaders().split(/\r?\n/);
        var headers = {};
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line === '') continue;

            var m = line.match(/^([^:]+):\s*(.*)/);
            if (m) {
                var key = m[1].toLowerCase(), value = m[2];

                if (headers[key] !== undefined) {
                    if ((Array.isArray && Array.isArray(headers[key]))
                    || headers[key] instanceof Array) {
                        headers[key].push(value);
                    }
                    else {
                        headers[key] = [ headers[key], value ];
                    }
                }
                else {
                    headers[key] = value;
                }
            }
            else {
                headers[line] = true;
            }
        }
        return headers;
    }

    Response.prototype.getResponse = function (xhr) {
        var respType = xhr.responseType.toLowerCase();
        if (respType === "blob") return xhr.responseBlob;
        if (respType === "arraybuffer") return xhr.response;
        return xhr.responseText;
    }

    Response.prototype.getHeader = function (key) {
        return this.headers[key.toLowerCase()] || this.xhr.getResponseHeader(key);
    };

    Response.prototype.handle = function (xhr) {
        if (xhr.readyState === 2 && capable.status2) {
            try {
                this.statusCode = xhr.status;
                this.headers = parseHeaders(xhr);
            }
            catch (err) {
                capable.status2 = false;
            }

            if (capable.status2) {
                this.emit('ready');
            }
        }
        else if (capable.streaming && xhr.readyState === 3) {
            try {
                if (!this.statusCode) {
                    this.statusCode = xhr.status;
                    this.headers = parseHeaders(xhr);
                    this.emit('ready');
                }
            }
            catch (err) {}

            try {
                this.write(xhr);
            }
            catch (err) {
                capable.streaming = false;
            }
        }
        else if (xhr.readyState === 4) {
            if (!this.statusCode) {
                this.statusCode = xhr.status;
                this.emit('ready');
            }
            this.write(xhr);

            if (xhr.error) {
                this.emit('error', this.getResponse(xhr));
            }
            else this.emit('end');
        }
    };

    Response.prototype.write = function (xhr) {
        var respBody = this.getResponse(xhr);
        if (respBody.toString().match(/ArrayBuffer/)) {
            this.emit('data', new Uint8Array(respBody, this.offset));
            this.offset = respBody.byteLength;
            return;
        }
        if (respBody.length > this.offset) {
            this.emit('data', respBody.slice(this.offset));
            this.offset = respBody.length;
        }
    };
    
    return Response;
    
  })();
  
  concatStream = (function() {
    
    var stream = require('stream')
    var util = require('util')

    function ConcatStream(cb) {
      stream.Stream.call(this)
      this.writable = true
      if (cb) this.cb = cb
      this.body = []
      this.on('error', function(err) {
        if (this.cb) this.cb(err)
      })
    }

    util.inherits(ConcatStream, stream.Stream)

    ConcatStream.prototype.write = function(chunk) {
      this.body.push(chunk)
    }

    ConcatStream.prototype.destroy = function() {}

    ConcatStream.prototype.arrayConcat = function(arrs) {
      if (arrs.length === 0) return []
      if (arrs.length === 1) return arrs[0]
      return arrs.reduce(function (a, b) { return a.concat(b) })
    }

    ConcatStream.prototype.isArray = function(arr) {
      var isArray = Array.isArray(arr)
      var isTypedArray = arr.toString().match(/Array/)
      return isArray || isTypedArray
    }

    ConcatStream.prototype.getBody = function () {
      if (this.body.length === 0) return
      if (typeof(this.body[0]) === "string") return this.body.join('')
      if (this.isArray(this.body[0])) return this.arrayConcat(this.body)
      if (typeof(Buffer) !== "undefined" && Buffer.isBuffer(this.body[0])) {
        return Buffer.concat(this.body)
      }
      return this.body
    }

    ConcatStream.prototype.end = function() {
      if (this.cb) this.cb(false, this.getBody())
    }

    var exports = function(cb) {
      return new ConcatStream(cb)
    }

    exports.ConcatStream = ConcatStream
    
    return exports;
    
  })();

  return Request;
    
})();


  
}
,
          
            "8f99cc2b75044ae1f45cefc6948e42b3": // from: 
function(exports,require,module,__filename,__dirname) {
module.exports = require('http');
  
}
,
          
            "e78828afe729e92d62b73d30c483888f": // from: 
function(exports,require,module,__filename,__dirname) {
var Stat, base64Decode, fs, getFile;

getFile = function(path) {
  var file, part, parts, _i, _len;
  parts = path.split("/").slice(1);
  file = global.filesystem.root;
  for (_i = 0, _len = parts.length; _i < _len; _i++) {
    part = parts[_i];
    if (!(file = file[part])) {
      throw "File not found at '" + path + "'";
    }
  }
  return file;
};

Stat = (function() {

  function Stat(path) {
    this.file = getFile(path);
  }

  Stat.prototype.isDirectory = function() {
    return this.file.__stat.type === "directory";
  };

  Stat.prototype.isFile = function() {
    return this.file.__stat.type === "file";
  };

  Stat.prototype.isSymbolicLink = function() {
    return false;
  };

  return Stat;

})();

base64Decode = function(string) {
  return decodeURIComponent(escape(window.atob(string)));
};

var fs = {
  readFileSync: function(path, encoding) {
    var file;
    file = getFile(path);
    return global.filesystem.read(file);
  },
  readdirSync: function(path) {
    var file;
    file = getFile(path);
    if (file.__stat.type === "directory") {
      var result = [];
      for (var key in file) {
        // TODO: this is not a great convention, since it's hardly
        // impossible that a file might start with two underscores
        if (!(/^__/.test(key))) {
          result.push( key );
        }
      }
      return result;
    } else {
      throw "Not a directory: '" + path + "'" ;
    }
  },
  statSync: function(path) {
    return new Stat(path);
  },
  lstatSync: function(path) {
    return this.statSync(path);
  },
  // realpath Sync adapted from Node source
  realpathSync: function realpathSync(p, cache) {

    var isWindows = process.platform === 'win32';

    // Regexp that finds the next partion of a (partial) path
    // result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
    if (isWindows) {
      var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
    } else {
      var nextPartRe = /(.*?)(?:[\/]+|$)/g;
    }

    // Regex to find the device root, including trailing slash. E.g. 'c:\\'.
    if (isWindows) {
      var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
    } else {
      var splitRootRe = /^[\/]*/;
    }

    var pathModule = NativeModule.require("path");
    var normalize = pathModule.normalize;

    // make p is absolute
    p = pathModule.resolve(p);

    if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
      return cache[p];
    }

    var original = p,
        seenLinks = {},
        knownHard = {};

    // current character position in p
    var pos;
    // the partial path so far, including a trailing slash if any
    var current;
    // the partial path without a trailing slash (except when pointing at a root)
    var base;
    // the partial path scanned in the previous round, with slash
    var previous;

    start();

    function start() {
      // Skip over roots
      var m = splitRootRe.exec(p);
      pos = m[0].length;
      current = m[0];
      base = m[0];
      previous = '';

      // On windows, check that the root exists. On unix there is no need.
      if (isWindows && !knownHard[base]) {
        fs.lstatSync(base);
        knownHard[base] = true;
      }
    }

    // walk down the path, swapping out linked pathparts for their real
    // values
    // NB: p.length changes.
    while (pos < p.length) {
      // find the next part
      nextPartRe.lastIndex = pos;
      var result = nextPartRe.exec(p);
      previous = current;
      current += result[0];
      base = previous + result[1];
      pos = nextPartRe.lastIndex;

      // continue if not a symlink
      if (knownHard[base] || (cache && cache[base] === base)) {
        continue;
      }

      var resolvedLink;
      if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
        // some known symbolic link.  no need to stat again.
        resolvedLink = cache[base];
      } else {
        var stat = fs.lstatSync(base);
        if (!stat.isSymbolicLink()) {
          knownHard[base] = true;
          if (cache) cache[base] = base;
          continue;
        }

        // read the link if it wasn't read before
        // dev/ino always return 0 on windows, so skip the check.
        var linkTarget = null;
        if (!isWindows) {
          var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
          if (seenLinks.hasOwnProperty(id)) {
            linkTarget = seenLinks[id];
          }
        }
        if (linkTarget === null) {
          fs.statSync(base);
          linkTarget = fs.readlinkSync(base);
        }
        resolvedLink = pathModule.resolve(previous, linkTarget);
        // track this, if given a cache.
        if (cache) cache[base] = resolvedLink;
        if (!isWindows) seenLinks[id] = linkTarget;
      }

      // resolve the link, then start over
      p = pathModule.resolve(resolvedLink, p.slice(pos));
      start();
    }

    if (cache) cache[original] = p;

    return p;
  }
};

module.exports = fs;  
}
,
          
            "223f09f17e4aff9f2d05493c688f7934": // from: 
function(exports,require,module,__filename,__dirname) {
//
// Adapted from Node source
//

var NativeModule = require('native_module');
var Script = process.binding('evals').NodeScript;
var runInThisContext = Script.runInThisContext;
var runInNewContext = Script.runInNewContext;
var assert = require('assert').ok;


// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  if (parent && parent.children) {
    parent.children.push(this);
  }

  this.filename = null;
  this.loaded = false;
  this.children = [];
}
module.exports = Module;

// Set the environ variable NODE_MODULE_CONTEXTS=1 to make node load all
// modules in thier own context.
Module._contextLoad = (+process.env['NODE_MODULE_CONTEXTS'] > 0);
Module._cache = {};
Module._pathCache = {};
Module._extensions = {};
var modulePaths = [];
Module.globalPaths = [];

Module.wrapper = NativeModule.wrapper;
Module.wrap = NativeModule.wrap;

var path = NativeModule.require('path');

Module._debug = function() {};
if (process.env.NODE_DEBUG && /module/.test(process.env.NODE_DEBUG)) {
  Module._debug = function(x) {
    console.error(x);
  };
}


// We use this alias for the preprocessor that filters it out
var debug = Module._debug;


// given a module name, and a list of paths to test, returns the first
// matching file in the following precedence.
//
// require("a.<ext>")
//   -> a.<ext>
//
// require("a")
//   -> a
//   -> a.<ext>
//   -> a/index.<ext>

function statPath(path) {
  var fs = NativeModule.require('fs');
  try {
    return fs.statSync(path);
  } catch (ex) {}
  return false;
}

// check if the directory is a package.json dir
var packageCache = {};

function readPackage(requestPath) {
  if (hasOwnProperty(packageCache, requestPath)) {
    return packageCache[requestPath];
  }

  var fs = NativeModule.require('fs');
  try {
    var jsonPath = path.resolve(requestPath, 'package.json');
    var json = fs.readFileSync(jsonPath, 'utf8');
  } catch (e) {
    return false;
  }

  try {
    var pkg = packageCache[requestPath] = JSON.parse(json);
  } catch (e) {
    e.path = jsonPath;
    e.message = 'Error parsing ' + jsonPath + ': ' + e.message;
    throw e;
  }
  return pkg;
}

function tryPackage(requestPath, exts) {
  var pkg = readPackage(requestPath);

  if (!pkg || !pkg.main) return false;

  var filename = path.resolve(requestPath, pkg.main);
  return tryFile(filename) || tryExtensions(filename, exts) ||
         tryExtensions(path.resolve(filename, 'index'), exts);
}

// In order to minimize unnecessary lstat() calls,
// this cache is a list of known-real paths.
// Set to an empty object to reset.
Module._realpathCache = {};

// check if the file exists and is not a directory
function tryFile(requestPath) {
  var fs = NativeModule.require('fs');
  var stats = statPath(requestPath);
  if (stats && !stats.isDirectory()) {
    return fs.realpathSync(requestPath, Module._realpathCache);
  }
  return false;
}

// given a path check a the file exists with any of the set extensions
function tryExtensions(p, exts) {
  for (var i = 0, EL = exts.length; i < EL; i++) {
    var filename = tryFile(p + exts[i]);

    if (filename) {
      return filename;
    }
  }
  return false;
}


Module._findPath = function(request, paths) {
  var exts = Object.keys(Module._extensions);

  if (request.charAt(0) === '/') {
    paths = [''];
  }

  var trailingSlash = (request.slice(-1) === '/');

  var cacheKey = JSON.stringify({request: request, paths: paths});
  if (Module._pathCache[cacheKey]) {
    return Module._pathCache[cacheKey];
  }

  // For each path
  for (var i = 0, PL = paths.length; i < PL; i++) {
    var basePath = path.resolve(paths[i], request);
    var filename;

    if (!trailingSlash) {
      // try to join the request to the path
      filename = tryFile(basePath);

      if (!filename && !trailingSlash) {
        // try it with each of the extensions
        filename = tryExtensions(basePath, exts);
      }
    }

    if (!filename) {
      filename = tryPackage(basePath, exts);
    }

    if (!filename) {
      // try it with each of the extensions at "index"
      filename = tryExtensions(path.resolve(basePath, 'index'), exts);
    }

    if (filename) {
      Module._pathCache[cacheKey] = filename;
      return filename;
    }
  }
  return false;
};

// 'from' is the __dirname of the module.
Module._nodeModulePaths = function(from) {
  // guarantee that 'from' is absolute.
  from = path.resolve(from);

  // note: this approach *only* works when the path is guaranteed
  // to be absolute.  Doing a fully-edge-case-correct path.split
  // that works on both Windows and Posix is non-trivial.
  var splitRe = process.platform === 'win32' ? /[\/\\]/ : /\//;
  // yes, '/' works on both, but let's be a little canonical.
  var joiner = process.platform === 'win32' ? '\\' : '/';
  var paths = [];
  var parts = from.split(splitRe);

  for (var tip = parts.length - 1; tip >= 0; tip--) {
    // don't search in .../node_modules/node_modules
    if (parts[tip] === 'node_modules') continue;
    var dir = parts.slice(0, tip + 1).concat('node_modules').join(joiner);
    paths.push(dir);
  }

  return paths;
};


Module._resolveLookupPaths = function(request, parent) {
  if (NativeModule.exists(request)) {
    return [request, []];
  }

  var start = request.substring(0, 2);
  if (start !== './' && start !== '..') {
    var paths = modulePaths;
    if (parent) {
      if (!parent.paths) parent.paths = [];
      paths = parent.paths.concat(paths);
    }
    return [request, paths];
  }

  // with --eval, parent.id is not set and parent.filename is null
  if (!parent || !parent.id || !parent.filename) {
    // make require('./path/to/foo') work - normally the path is taken
    // from realpath(__filename) but with eval there is no filename
    var mainPaths = ['.'].concat(modulePaths);
    mainPaths = Module._nodeModulePaths('.').concat(mainPaths);
    return [request, mainPaths];
  }

  // Is the parent an index module?
  // We can assume the parent has a valid extension,
  // as it already has been accepted as a module.
  var isIndex = /^index\.\w+?$/.test(path.basename(parent.filename));
  var parentIdPath = isIndex ? parent.id : path.dirname(parent.id);
  var id = path.resolve(parentIdPath, request);

  // make sure require('./path') and require('path') get distinct ids, even
  // when called from the toplevel js file
  if (parentIdPath === '.' && id.indexOf('/') === -1) {
    id = './' + id;
  }

  debug('RELATIVE: requested:' + request +
        ' set ID to: ' + id + ' from ' + parent.id);

  return [id, [path.dirname(parent.filename)]];
};


Module._load = function(request, parent, isMain) {
  if (parent) {
    debug('Module._load REQUEST  ' + (request) + ' parent: ' + parent.id);
  }

  var filename = Module._resolveFilename(request, parent);

  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;
  }

  if (NativeModule.exists(filename)) {
    // REPL is a special case, because it needs the real require.
    if (filename == 'repl') {
      var replModule = new Module('repl');
      replModule._compile(NativeModule.getSource('repl'), 'repl.js');
      NativeModule._cache.repl = replModule;
      return replModule.exports;
    }

    debug('load native module ' + request);
    return NativeModule.require(filename);
  }

  var module = new Module(filename, parent);

  if (isMain) {
    process.mainModule = module;
    module.id = '.';
  }

  Module._cache[filename] = module;

  var hadException = true;

  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }

  return module.exports;
};

Module._resolveFilename = function(request, parent) {
  if (NativeModule.exists(request)) {
    return request;
  }

  var resolvedModule = Module._resolveLookupPaths(request, parent);
  var id = resolvedModule[0];
  var paths = resolvedModule[1];

  // look up the filename first, since that's the cache key.
  debug('looking for ' + JSON.stringify(id) +
        ' in ' + JSON.stringify(paths));

  var filename = Module._findPath(request, paths);
  if (!filename) {
    var err = new Error("Cannot find module '" + request + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }
  return filename;
};


Module.prototype.load = function(filename) {
  debug('load ' + JSON.stringify(filename) +
        ' for module ' + JSON.stringify(this.id));

  assert(!this.loaded);
  this.filename = filename;
  this.paths = Module._nodeModulePaths(path.dirname(filename));

  var extension = path.extname(filename) || '.js';
  if (!Module._extensions[extension]) extension = '.js';
  Module._extensions[extension](this, filename);
  this.loaded = true;
};


Module.prototype.require = function(path) {
  return Module._load(path, this);
};


// Resolved path to process.argv[1] will be lazily placed here
// (needed for setting breakpoint when called with --debug-brk)
var resolvedArgv;


// Returns exception if any
Module.prototype._compile = function(content, filename) {
  var self = this;
  // remove shebang
  content = content.replace(/^\#\!.*/, '');

  function require(path) {
    return self.require(path);
  }

  require.resolve = function(request) {
    return Module._resolveFilename(request, self);
  };

  Object.defineProperty(require, 'paths', { get: function() {
    throw new Error('require.paths is removed. Use ' +
                    'node_modules folders, or the NODE_PATH ' +
                    'environment variable instead.');
  }});

  require.main = process.mainModule;

  // Enable support to add extra extension types
  require.extensions = Module._extensions;
  require.registerExtension = function() {
    throw new Error('require.registerExtension() removed. Use ' +
                    'require.extensions instead.');
  };

  require.cache = Module._cache;

  var dirname = path.dirname(filename);

  if (Module._contextLoad) {
    if (self.id !== '.') {
      debug('load submodule');
      // not root module
      var sandbox = {};
      for (var k in global) {
        sandbox[k] = global[k];
      }
      sandbox.require = require;
      sandbox.exports = self.exports;
      sandbox.__filename = filename;
      sandbox.__dirname = dirname;
      sandbox.module = self;
      sandbox.global = sandbox;
      sandbox.root = root;

      return runInNewContext(content, sandbox, filename, true);
    }

    debug('load root module');
    // root module
    global.require = require;
    global.exports = self.exports;
    global.__filename = filename;
    global.__dirname = dirname;
    global.module = self;

    return runInThisContext(content, filename, true);
  }

  // create wrapper function
  var wrapper = Module.wrap(content);

  var compiledWrapper = runInThisContext(wrapper, filename, true);
  if (global.v8debug) {
    if (!resolvedArgv) {
      // we enter the repl if we're not given a filename argument.
      if (process.argv[1]) {
        resolvedArg = Module._resolveFilename(process.argv[1], null);
      } else {
        resolvedArg = 'repl';
      }
    }

    // Set breakpoint on module start
    if (filename === resolvedArgv) {
      global.v8debug.Debug.setBreakPoint(compiledWrapper, 0, 0);
    }
  }
  var args = [self.exports, require, self, filename, dirname];
  return compiledWrapper.apply(self.exports, args);
};


function stripBOM(content) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}


// Native extension for .js
Module._extensions['.js'] = function(module, filename) {
  var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
  module._compile(stripBOM(content), filename);
};

// We've already pre-compiled the CoffeeScript so we can embed the source and
// have it show up in the debugger
Module._extensions['.coffee'] = Module._extensions['.js']


// Native extension for .json
Module._extensions['.json'] = function(module, filename) {
  var content = NativeModule.require('fs').readFileSync(filename, 'utf8');
  try {
    module.exports = JSON.parse(stripBOM(content));
  } catch (err) {
    err.message = filename + ': ' + err.message;
    throw err;
  }
};


//Native extension for .node
Module._extensions['.node'] = function(module, filename) {
  process.dlopen(filename, module.exports);
};


// bootstrap main module.
Module.runMain = function() {
  // Load the main module--the command line argument.
  Module._load(process.argv[1], null, true);
};

Module._initPaths = function() {
  var paths = [path.resolve(process.execPath, '..', '..', 'lib', 'node')];

  if (process.env['HOME']) {
    paths.unshift(path.resolve(process.env['HOME'], '.node_libraries'));
    paths.unshift(path.resolve(process.env['HOME'], '.node_modules'));
  }

  if (process.env['NODE_PATH']) {
    var splitter = process.platform === 'win32' ? ';' : ':';
    paths = process.env['NODE_PATH'].split(splitter).concat(paths);
  }

  modulePaths = paths;

  // clone as a read-only copy, for introspection.
  Module.globalPaths = modulePaths.slice(0);
};

// bootstrap repl
Module.requireRepl = function() {
  return Module._load('repl', '.');
};

Module._initPaths();

// backwards compatibility
Module.Module = Module;
  
}
,
          
            "ddeff58ff67e5d2d686891fc66ebb2b7": // from: 
function(exports,require,module,__filename,__dirname) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (typeof f !== 'string') {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j': return JSON.stringify(args[i++]);
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (x === null || typeof x !== 'object') {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


exports.print = function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(String(arguments[i]));
  }
};


exports.puts = function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
};


exports.debug = function(x) {
  process.stderr.write('DEBUG: ' + x + '\n');
};


var error = exports.error = function(x) {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stderr.write(arguments[i] + '\n');
  }
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: colors ? stylizeWithColor : stylizeNoColor
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    return String(value.inspect(recurseTimes));
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (typeof value === 'function') {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}
exports.isArray = isArray;


function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;


function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;


function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}
exports.isError = isError;


function objectToString(o) {
  return Object.prototype.toString.call(o);
}


exports.p = exports.deprecate(function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    error(exports.inspect(arguments[i]));
  }
}, 'util.p: Use console.error() instead.');


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


exports.log = function(msg) {
  exports.puts(timestamp() + ' - ' + msg.toString());
};


exports.exec = exports.deprecate(function() {
  return require('child_process').exec.apply(this, arguments);
}, 'util.exec is now called `child_process.exec`.');


function pump(readStream, writeStream, callback) {
  var callbackCalled = false;

  function call(a, b, c) {
    if (callback && !callbackCalled) {
      callback(a, b, c);
      callbackCalled = true;
    }
  }

  readStream.addListener('data', function(chunk) {
    if (writeStream.write(chunk) === false) readStream.pause();
  });

  writeStream.addListener('drain', function() {
    readStream.resume();
  });

  readStream.addListener('end', function() {
    writeStream.end();
  });

  readStream.addListener('close', function() {
    call();
  });

  readStream.addListener('error', function(err) {
    writeStream.end();
    call(err);
  });

  writeStream.addListener('error', function(err) {
    readStream.destroy();
    call(err);
  });
}
exports.pump = exports.deprecate(pump,
    'util.pump() is deprecated. Use ReadableStream.prototype.pump() instead.');


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = function(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || typeof add !== 'object') return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
  
}
,
          
            "7b51c3f0555ccb0c0f1fcd91d389ea1a": // from: 
function(exports,require,module,__filename,__dirname) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var isWindows = process.platform === 'win32';
var util = require('util');


// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}


if (isWindows) {
  // Regex to split a windows path into three parts: [*, device, slash,
  // tail] windows-only
  var splitDeviceRe =
      /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?([\\\/])?([\s\S]*?)$/;

  // Regex to split the tail part of the above into [*, dir, basename, ext]
  var splitTailRe =
      /^([\s\S]+[\\\/](?!$)|[\\\/])?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/\\]*)?)$/;

  // Function to split a filename into [root, dir, basename, ext]
  // windows version
  var splitPath = function(filename) {
    // Separate device+slash from tail
    var result = splitDeviceRe.exec(filename),
        device = (result[1] || '') + (result[2] || ''),
        tail = result[3] || '';
    // Split the tail into dir, basename and extension
    var result2 = splitTailRe.exec(tail),
        dir = result2[1] || '',
        basename = result2[2] || '',
        ext = result2[3] || '';
    return [device, dir, basename, ext];
  };

  // path.resolve([from ...], to)
  // windows version
  exports.resolve = function() {
    var resolvedDevice = '',
        resolvedTail = '',
        resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1; i--) {
      var path;
      if (i >= 0) {
        path = arguments[i];
      } else if (!resolvedDevice) {
        path = process.cwd();
      } else {
        // Windows has the concept of drive-specific current working
        // directories. If we've resolved a drive letter but not yet an
        // absolute path, get cwd for that drive. We're sure the device is not
        // an unc path at this points, because unc paths are always absolute.
        path = process.env['=' + resolvedDevice];
        // Verify that a drive-local cwd was found and that it actually points
        // to our drive. If not, default to the drive's root.
        if (!path || path.substr(0, 3).toLowerCase() !==
            resolvedDevice.toLowerCase() + '\\') {
          path = resolvedDevice + '\\';
        }
      }

      // Skip empty and invalid entries
      if (typeof path !== 'string' || !path) {
        continue;
      }

      var result = splitDeviceRe.exec(path),
          device = result[1] || '',
          isUnc = device && device.charAt(1) !== ':',
          isAbsolute = !!result[2] || isUnc, // UNC paths are always absolute
          tail = result[3];

      if (device &&
          resolvedDevice &&
          device.toLowerCase() !== resolvedDevice.toLowerCase()) {
        // This path points to another device so it is not applicable
        continue;
      }

      if (!resolvedDevice) {
        resolvedDevice = device;
      }
      if (!resolvedAbsolute) {
        resolvedTail = tail + '\\' + resolvedTail;
        resolvedAbsolute = isAbsolute;
      }

      if (resolvedDevice && resolvedAbsolute) {
        break;
      }
    }

    // Replace slashes (in UNC share name) by backslashes
    resolvedDevice = resolvedDevice.replace(/\//g, '\\');

    // At this point the path should be resolved to a full absolute path,
    // but handle relative paths to be safe (might happen when process.cwd()
    // fails)

    // Normalize the tail path

    function f(p) {
      return !!p;
    }

    resolvedTail = normalizeArray(resolvedTail.split(/[\\\/]+/).filter(f),
                                  !resolvedAbsolute).join('\\');

    return (resolvedDevice + (resolvedAbsolute ? '\\' : '') + resolvedTail) ||
           '.';
  };

  // windows version
  exports.normalize = function(path) {
    var result = splitDeviceRe.exec(path),
        device = result[1] || '',
        isUnc = device && device.charAt(1) !== ':',
        isAbsolute = !!result[2] || isUnc, // UNC paths are always absolute
        tail = result[3],
        trailingSlash = /[\\\/]$/.test(tail);

    // Normalize the tail path
    tail = normalizeArray(tail.split(/[\\\/]+/).filter(function(p) {
      return !!p;
    }), !isAbsolute).join('\\');

    if (!tail && !isAbsolute) {
      tail = '.';
    }
    if (tail && trailingSlash) {
      tail += '\\';
    }

    // Convert slashes to backslashes when `device` points to an UNC root.
    device = device.replace(/\//g, '\\');

    return device + (isAbsolute ? '\\' : '') + tail;
  };

  // windows version
  exports.join = function() {
    function f(p) {
      return p && typeof p === 'string';
    }

    var paths = Array.prototype.filter.call(arguments, f);
    var joined = paths.join('\\');

    // Make sure that the joined path doesn't start with two slashes
    // - it will be mistaken for an unc path by normalize() -
    // unless the paths[0] also starts with two slashes
    if (/^[\\\/]{2}/.test(joined) && !/^[\\\/]{2}/.test(paths[0])) {
      joined = joined.substr(1);
    }

    return exports.normalize(joined);
  };

  // path.relative(from, to)
  // it will solve the relative path from 'from' to 'to', for instance:
  // from = 'C:\\orandea\\test\\aaa'
  // to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  // windows version
  exports.relative = function(from, to) {
    from = exports.resolve(from);
    to = exports.resolve(to);

    // windows is not case sensitive
    var lowerFrom = from.toLowerCase();
    var lowerTo = to.toLowerCase();

    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var toParts = trim(to.split('\\'));

    var lowerFromParts = trim(lowerFrom.split('\\'));
    var lowerToParts = trim(lowerTo.split('\\'));

    var length = Math.min(lowerFromParts.length, lowerToParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (lowerFromParts[i] !== lowerToParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    if (samePartsLength == 0) {
      return to;
    }

    var outputParts = [];
    for (var i = samePartsLength; i < lowerFromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('\\');
  };

  exports.sep = '\\';

} else /* posix */ {

  // Split a filename into [root, dir, basename, ext], unix version
  // 'root' is just a slash, or nothing.
  var splitPathRe =
      /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/;
  var splitPath = function(filename) {
    var result = splitPathRe.exec(filename);
    return [result[1] || '', result[2] || '', result[3] || '', result[4] || ''];
  };

  // path.resolve([from ...], to)
  // posix version
  exports.resolve = function() {
    var resolvedPath = '',
        resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path = (i >= 0) ? arguments[i] : process.cwd();

      // Skip empty and invalid entries
      if (typeof path !== 'string' || !path) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charAt(0) === '/';
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeArray(resolvedPath.split('/').filter(function(p) {
      return !!p;
    }), !resolvedAbsolute).join('/');

    return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
  };

  // path.normalize(path)
  // posix version
  exports.normalize = function(path) {
    var isAbsolute = path.charAt(0) === '/',
        trailingSlash = path.substr(-1) === '/';

    // Normalize the path
    path = normalizeArray(path.split('/').filter(function(p) {
      return !!p;
    }), !isAbsolute).join('/');

    if (!path && !isAbsolute) {
      path = '.';
    }
    if (path && trailingSlash) {
      path += '/';
    }

    return (isAbsolute ? '/' : '') + path;
  };


  // posix version
  exports.join = function() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(paths.filter(function(p, index) {
      return p && typeof p === 'string';
    }).join('/'));
  };


  // path.relative(from, to)
  // posix version
  exports.relative = function(from, to) {
    from = exports.resolve(from).substr(1);
    to = exports.resolve(to).substr(1);

    function trim(arr) {
      var start = 0;
      for (; start < arr.length; start++) {
        if (arr[start] !== '') break;
      }

      var end = arr.length - 1;
      for (; end >= 0; end--) {
        if (arr[end] !== '') break;
      }

      if (start > end) return [];
      return arr.slice(start, end - start + 1);
    }

    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));

    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for (var i = 0; i < length; i++) {
      if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
      }
    }

    var outputParts = [];
    for (var i = samePartsLength; i < fromParts.length; i++) {
      outputParts.push('..');
    }

    outputParts = outputParts.concat(toParts.slice(samePartsLength));

    return outputParts.join('/');
  };

  exports.sep = '/';
}


exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};


exports.exists = util.deprecate(function(path, callback) {
  require('fs').exists(path, callback);
}, 'path.exists is now called `fs.exists`.');


exports.existsSync = util.deprecate(function(path) {
  return require('fs').existsSync(path);
}, 'path.existsSync is now called `fs.existsSync`.');


if (isWindows) {
  exports._makeLong = function(path) {
    path = '' + path;
    if (!path) {
      return '';
    }

    var resolvedPath = exports.resolve(path);

    if (/^[a-zA-Z]\:\\/.test(resolvedPath)) {
      // path is local filesystem path, which needs to be converted
      // to long UNC path.
      return '\\\\?\\' + resolvedPath;
    } else if (/^\\\\[^?.]/.test(resolvedPath)) {
      // path is network UNC path, which needs to be converted
      // to long UNC path.
      return '\\\\?\\UNC\\' + resolvedPath.substring(2);
    }

    return path;
  };
} else {
  exports._makeLong = function(path) {
    return path;
  };
}
  
}
,
          
            "d0c9d6cc2490c964b789d43ae4803b7b": // from: 
function(exports,require,module,__filename,__dirname) {
var punycode = { encode : function (s) { return s } };

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

function arrayIndexOf(array, subject) {
    for (var i = 0, j = array.length; i < j; i++) {
        if(array[i] == subject) return i;
    }
    return -1;
}

var objectKeys = Object.keys || function objectKeys(object) {
    if (object !== Object(object)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
    return keys;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]+$/,
    // RFC 2396: characters reserved for delimiting URLs.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],
    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '~', '[', ']', '`'].concat(delims),
    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''],
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#']
      .concat(unwise).concat(autoEscape),
    nonAuthChars = ['/', '@', '?', '#'].concat(delims),
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-zA-Z0-9][a-z0-9A-Z_-]{0,62}$/,
    hostnamePartStart = /^([a-zA-Z0-9][a-z0-9A-Z_-]{0,62})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always have a path component.
    pathedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && typeof(url) === 'object' && url.href) return url;

  if (typeof url !== 'string') {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var out = {},
      rest = url;

  // cut off any delimiters.
  // This is to support parse stuff like "<http://foo.com>"
  for (var i = 0, l = rest.length; i < l; i++) {
    if (arrayIndexOf(delims, rest.charAt(i)) === -1) break;
  }
  if (i !== 0) rest = rest.substr(i);


  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    out.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      out.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {
    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    // don't enforce full RFC correctness, just be unstupid about it.

    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the first @ sign, unless some non-auth character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    var atSign = arrayIndexOf(rest, '@');
    if (atSign !== -1) {
      // there *may be* an auth
      var hasAuth = true;
      for (var i = 0, l = nonAuthChars.length; i < l; i++) {
        var index = arrayIndexOf(rest, nonAuthChars[i]);
        if (index !== -1 && index < atSign) {
          // not a valid auth.  Something like http://foo.com/bar@baz/
          hasAuth = false;
          break;
        }
      }
      if (hasAuth) {
        // pluck off the auth portion.
        out.auth = rest.substr(0, atSign);
        rest = rest.substr(atSign + 1);
      }
    }

    var firstNonHost = -1;
    for (var i = 0, l = nonHostChars.length; i < l; i++) {
      var index = arrayIndexOf(rest, nonHostChars[i]);
      if (index !== -1 &&
          (firstNonHost < 0 || index < firstNonHost)) firstNonHost = index;
    }

    if (firstNonHost !== -1) {
      out.host = rest.substr(0, firstNonHost);
      rest = rest.substr(firstNonHost);
    } else {
      out.host = rest;
      rest = '';
    }

    // pull out port.
    var p = parseHost(out.host);
    var keys = objectKeys(p);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      out[key] = p[key];
    }

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    out.hostname = out.hostname || '';

    // validate a little.
    if (out.hostname.length > hostnameMaxLen) {
      out.hostname = '';
    } else {
      var hostparts = out.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            out.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    // hostnames are always lower case.
    out.hostname = out.hostname.toLowerCase();

    // IDNA Support: Returns a puny coded representation of "domain".
    // It only converts the part of the domain name that
    // has non ASCII characters. I.e. it dosent matter if
    // you call it with a domain that already is in ASCII.
    var domainArray = out.hostname.split('.');
    var newOut = [];
    for (var i = 0; i < domainArray.length; ++i) {
      var s = domainArray[i];
      newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
          'xn--' + punycode.encode(s) : s);
    }
    out.hostname = newOut.join('.');

    out.host = (out.hostname || '') +
        ((out.port) ? ':' + out.port : '');
    out.href += out.host;
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }

    // Now make sure that delims never appear in a url.
    var chop = rest.length;
    for (var i = 0, l = delims.length; i < l; i++) {
      var c = arrayIndexOf(rest, delims[i]);
      if (c !== -1) {
        chop = Math.min(c, chop);
      }
    }
    rest = rest.substr(0, chop);
  }


  // chop off from the tail first.
  var hash = arrayIndexOf(rest, '#');
  if (hash !== -1) {
    // got a fragment string.
    out.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = arrayIndexOf(rest, '?');
  if (qm !== -1) {
    out.search = rest.substr(qm);
    out.query = rest.substr(qm + 1);
    if (parseQueryString) {
      out.query = querystring.parse(out.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    out.search = '';
    out.query = {};
  }
  if (rest) out.pathname = rest;
  if (slashedProtocol[proto] &&
      out.hostname && !out.pathname) {
    out.pathname = '/';
  }

  //to support http.request
  if (out.pathname || out.search) {
    out.path = (out.pathname ? out.pathname : '') +
               (out.search ? out.search : '');
  }

  // finally, reconstruct the href based on what has been validated.
  out.href = urlFormat(out);
  return out;
}

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (typeof(obj) === 'string') obj = urlParse(obj);

  var auth = obj.auth || '';
  if (auth) {
    auth = auth.split('@').join('%40');
    for (var i = 0, l = nonAuthChars.length; i < l; i++) {
      var nAC = nonAuthChars[i];
      auth = auth.split(nAC).join(encodeURIComponent(nAC));
    }
    auth += '@';
  }

  var protocol = obj.protocol || '',
      host = (obj.host !== undefined) ? auth + obj.host :
          obj.hostname !== undefined ? (
              auth + obj.hostname +
              (obj.port ? ':' + obj.port : '')
          ) :
          false,
      pathname = obj.pathname || '',
      query = obj.query &&
              ((typeof obj.query === 'object' &&
                objectKeys(obj.query).length) ?
                 querystring.stringify(obj.query) :
                 '') || '',
      search = obj.search || (query && ('?' + query)) || '',
      hash = obj.hash || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (obj.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  return protocol + host + pathname + search + hash;
}

function urlResolve(source, relative) {
  return urlFormat(urlResolveObject(source, relative));
}

function urlResolveObject(source, relative) {
  if (!source) return relative;

  source = urlParse(urlFormat(source), false, true);
  relative = urlParse(urlFormat(relative), false, true);

  // hash is always overridden, no matter what.
  source.hash = relative.hash;

  if (relative.href === '') {
    source.href = urlFormat(source);
    return source;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    relative.protocol = source.protocol;
    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[relative.protocol] &&
        relative.hostname && !relative.pathname) {
      relative.path = relative.pathname = '/';
    }
    relative.href = urlFormat(relative);
    return relative;
  }

  if (relative.protocol && relative.protocol !== source.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      relative.href = urlFormat(relative);
      return relative;
    }
    source.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      relative.pathname = relPath.join('/');
    }
    source.pathname = relative.pathname;
    source.search = relative.search;
    source.query = relative.query;
    source.host = relative.host || '';
    source.auth = relative.auth;
    source.hostname = relative.hostname || relative.host;
    source.port = relative.port;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.slashes = source.slashes || relative.slashes;
    source.href = urlFormat(source);
    return source;
  }

  var isSourceAbs = (source.pathname && source.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host !== undefined ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (source.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = source.pathname && source.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = source.protocol &&
          !slashedProtocol[source.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // source.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {

    delete source.hostname;
    delete source.port;
    if (source.host) {
      if (srcPath[0] === '') srcPath[0] = source.host;
      else srcPath.unshift(source.host);
    }
    delete source.host;
    if (relative.protocol) {
      delete relative.hostname;
      delete relative.port;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      delete relative.host;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    source.host = (relative.host || relative.host === '') ?
                      relative.host : source.host;
    source.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : source.hostname;
    source.search = relative.search;
    source.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    source.search = relative.search;
    source.query = relative.query;
  } else if ('search' in relative) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      source.hostname = source.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ?
                       source.host.split('@') : false;
      if (authInHost) {
        source.auth = authInHost.shift();
        source.host = source.hostname = authInHost.shift();
      }
    }
    source.search = relative.search;
    source.query = relative.query;
    //to support http.request
    if (source.pathname !== undefined || source.search !== undefined) {
      source.path = (source.pathname ? source.pathname : '') +
                    (source.search ? source.search : '');
    }
    source.href = urlFormat(source);
    return source;
  }
  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    delete source.pathname;
    //to support http.request
    if (!source.search) {
      source.path = '/' + source.search;
    } else {
      delete source.path;
    }
    source.href = urlFormat(source);
    return source;
  }
  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (source.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    source.hostname = source.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = source.host && arrayIndexOf(source.host, '@') > 0 ?
                     source.host.split('@') : false;
    if (authInHost) {
      source.auth = authInHost.shift();
      source.host = source.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (source.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  source.pathname = srcPath.join('/');
  //to support request.http
  if (source.pathname !== undefined || source.search !== undefined) {
    source.path = (source.pathname ? source.pathname : '') +
                  (source.search ? source.search : '');
  }
  source.auth = relative.auth || source.auth;
  source.slashes = source.slashes || relative.slashes;
  source.href = urlFormat(source);
  return source;
}

function parseHost(host) {
  var out = {};
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    out.port = port.substr(1);
    host = host.substr(0, host.length - port.length);
  }
  if (host) out.hostname = host;
  return out;
}
  
}
,
          
            "b499eb63a89b9e6fb99ef1209a65ace6": // from: 
function(exports,require,module,__filename,__dirname) {
if (!process.EventEmitter) process.EventEmitter = function () {};

var EventEmitter = exports.EventEmitter = process.EventEmitter;
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    }
;

// By default EventEmitters will print a warning if more than
// 10 listeners are added to it. This is a useful default which
// helps finding memory leaks.
//
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
var defaultMaxListeners = 10;
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!this._events) this._events = {};
  this._events.maxListeners = n;
};


EventEmitter.prototype.emit = function(type) {
  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events || !this._events.error ||
        (isArray(this._events.error) && !this._events.error.length))
    {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
      return false;
    }
  }

  if (!this._events) return false;
  var handler = this._events[type];
  if (!handler) return false;

  if (typeof handler == 'function') {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        var args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
    return true;

  } else if (isArray(handler)) {
    var args = Array.prototype.slice.call(arguments, 1);

    var listeners = handler.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
      listeners[i].apply(this, args);
    }
    return true;

  } else {
    return false;
  }
};

// EventEmitter is defined in src/node_events.cc
// EventEmitter.prototype.emit() is also defined there.
EventEmitter.prototype.addListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('addListener only takes instances of Function');
  }

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type == "newListeners"! Before
  // adding it to the listeners, first emit "newListeners".
  this.emit('newListener', type, listener);

  if (!this._events[type]) {
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  } else if (isArray(this._events[type])) {

    // Check for listener leak
    if (!this._events[type].warned) {
      var m;
      if (this._events.maxListeners !== undefined) {
        m = this._events.maxListeners;
      } else {
        m = defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' +
                      'leak detected. %d listeners added. ' +
                      'Use emitter.setMaxListeners() to increase limit.',
                      this._events[type].length);
        console.trace();
      }
    }

    // If we've already got an array, just append.
    this._events[type].push(listener);
  } else {
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  var self = this;
  self.on(type, function g() {
    self.removeListener(type, g);
    listener.apply(this, arguments);
  });

  return this;
};

EventEmitter.prototype.removeListener = function(type, listener) {
  if ('function' !== typeof listener) {
    throw new Error('removeListener only takes instances of Function');
  }

  // does not use listeners(), so no side effect of creating _events[type]
  if (!this._events || !this._events[type]) return this;

  var list = this._events[type];

  if (isArray(list)) {
    var i = list.indexOf(listener);
    if (i < 0) return this;
    list.splice(i, 1);
    if (list.length == 0)
      delete this._events[type];
  } else if (this._events[type] === listener) {
    delete this._events[type];
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  // does not use listeners(), so no side effect of creating _events[type]
  if (type && this._events && this._events[type]) this._events[type] = null;
  return this;
};

EventEmitter.prototype.listeners = function(type) {
  if (!this._events) this._events = {};
  if (!this._events[type]) this._events[type] = [];
  if (!isArray(this._events[type])) {
    this._events[type] = [this._events[type]];
  }
  return this._events[type];
};
  
}
,
          
            "54c69a095dc8e4a9173bd8284c4e8ad7": // from: 
function(exports,require,module,__filename,__dirname) {
var isArray = typeof Array.isArray === 'function'
    ? Array.isArray
    : function (xs) {
        return Object.prototype.toString.call(xs) === '[object Array]'
    };

var objectKeys = Object.keys || function objectKeys(object) {
    if (object !== Object(object)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in object) if (object.hasOwnProperty(key)) keys[keys.length] = key;
    return keys;
}


/*!
 * querystring
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

/**
 * Library version.
 */

exports.version = '0.3.1';

/**
 * Object#toString() ref for stringify().
 */

var toString = Object.prototype.toString;

/**
 * Cache non-integer test regexp.
 */

var notint = /[^0-9]/;

/**
 * Parse the given query `str`, returning an object.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */

exports.parse = function(str){
  if (null == str || '' == str) return {};

  function promote(parent, key) {
    if (parent[key].length == 0) return parent[key] = {};
    var t = {};
    for (var i in parent[key]) t[i] = parent[key][i];
    parent[key] = t;
    return t;
  }

  return String(str)
    .split('&')
    .reduce(function(ret, pair){
      try{ 
        pair = decodeURIComponent(pair.replace(/\+/g, ' '));
      } catch(e) {
        // ignore
      }

      var eql = pair.indexOf('=')
        , brace = lastBraceInKey(pair)
        , key = pair.substr(0, brace || eql)
        , val = pair.substr(brace || eql, pair.length)
        , val = val.substr(val.indexOf('=') + 1, val.length)
        , parent = ret;

      // ?foo
      if ('' == key) key = pair, val = '';

      // nested
      if (~key.indexOf(']')) {
        var parts = key.split('[')
          , len = parts.length
          , last = len - 1;

        function parse(parts, parent, key) {
          var part = parts.shift();

          // end
          if (!part) {
            if (isArray(parent[key])) {
              parent[key].push(val);
            } else if ('object' == typeof parent[key]) {
              parent[key] = val;
            } else if ('undefined' == typeof parent[key]) {
              parent[key] = val;
            } else {
              parent[key] = [parent[key], val];
            }
          // array
          } else {
            obj = parent[key] = parent[key] || [];
            if (']' == part) {
              if (isArray(obj)) {
                if ('' != val) obj.push(val);
              } else if ('object' == typeof obj) {
                obj[objectKeys(obj).length] = val;
              } else {
                obj = parent[key] = [parent[key], val];
              }
            // prop
            } else if (~part.indexOf(']')) {
              part = part.substr(0, part.length - 1);
              if(notint.test(part) && isArray(obj)) obj = promote(parent, key);
              parse(parts, obj, part);
            // key
            } else {
              if(notint.test(part) && isArray(obj)) obj = promote(parent, key);
              parse(parts, obj, part);
            }
          }
        }

        parse(parts, parent, 'base');
      // optimize
      } else {
        if (notint.test(key) && isArray(parent.base)) {
          var t = {};
          for(var k in parent.base) t[k] = parent.base[k];
          parent.base = t;
        }
        set(parent.base, key, val);
      }

      return ret;
    }, {base: {}}).base;
};

/**
 * Turn the given `obj` into a query string
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

var stringify = exports.stringify = function(obj, prefix) {
  if (isArray(obj)) {
    return stringifyArray(obj, prefix);
  } else if ('[object Object]' == toString.call(obj)) {
    return stringifyObject(obj, prefix);
  } else if ('string' == typeof obj) {
    return stringifyString(obj, prefix);
  } else {
    return prefix;
  }
};

/**
 * Stringify the given `str`.
 *
 * @param {String} str
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyString(str, prefix) {
  if (!prefix) throw new TypeError('stringify expects an object');
  return prefix + '=' + encodeURIComponent(str);
}

/**
 * Stringify the given `arr`.
 *
 * @param {Array} arr
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyArray(arr, prefix) {
  var ret = [];
  if (!prefix) throw new TypeError('stringify expects an object');
  for (var i = 0; i < arr.length; i++) {
    ret.push(stringify(arr[i], prefix + '[]'));
  }
  return ret.join('&');
}

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @param {String} prefix
 * @return {String}
 * @api private
 */

function stringifyObject(obj, prefix) {
  var ret = []
    , keys = objectKeys(obj)
    , key;
  for (var i = 0, len = keys.length; i < len; ++i) {
    key = keys[i];
    ret.push(stringify(obj[key], prefix
      ? prefix + '[' + encodeURIComponent(key) + ']'
      : encodeURIComponent(key)));
  }
  return ret.join('&');
}

/**
 * Set `obj`'s `key` to `val` respecting
 * the weird and wonderful syntax of a qs,
 * where "foo=bar&foo=baz" becomes an array.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {String} val
 * @api private
 */

function set(obj, key, val) {
  var v = obj[key];
  if (undefined === v) {
    obj[key] = val;
  } else if (isArray(v)) {
    v.push(val);
  } else {
    obj[key] = [v, val];
  }
}

/**
 * Locate last brace in `str` within the key.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function lastBraceInKey(str) {
  var len = str.length
    , brace
    , c;
  for (var i = 0; i < len; ++i) {
    c = str[i];
    if (']' == c) brace = false;
    if ('[' == c) brace = true;
    if ('=' == c && !brace) return i;
  }
}
  
}
,
          
            "f0d5935f094eb3d9fb70c67795bd4caf": // from: 
function(exports,require,module,__filename,__dirname) {
var events = require('events');
var util = require('util');

function Stream() {
  events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);
module.exports = Stream;
// Backwards-compat with node 0.4.x
Stream.Stream = Stream;

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once, and
  // only when all sources have ended.
  if (!dest._isStdio && (!options || options.end !== false)) {
    dest._pipeCount = dest._pipeCount || 0;
    dest._pipeCount++;

    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest._pipeCount--;

    // remove the listeners
    cleanup();

    if (dest._pipeCount > 0) {
      // waiting for other incoming streams to end.
      return;
    }

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest._pipeCount--;

    // remove the listeners
    cleanup();

    if (dest._pipeCount > 0) {
      // waiting for other incoming streams to end.
      return;
    }

    dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (this.listeners('error').length === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('end', cleanup);
    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('end', cleanup);
  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};
  
}
,
          
            "a8aae685be6eeb8ec844ae9c4f5fd189": // from: 
function(exports,require,module,__filename,__dirname) {
// TODO  
}
,
          
        }
      },
      read: function(reference) {
        if (reference.__ref != null) {
          reference = reference.__ref;
        }
        return base64Decode(global.filesystem.content[reference]);
      }
    }
  };
})();

var process = (function() {
  var scopes;
  scopes = {
    evals: {
      NodeScript: {
        runInThisContext: function(source, filename, returnResult) {
          return global.filesystem.modules.function[source];
        },
        runInNewContext: function(source, filename, returnResult) {
          console.log("WARNING: runInNewContext doesn't work " +
            "in the browser.");
          return global.filesystem.module.function[source];
        }
      }
    }
  };
  return {
    platform: "browser",
    moduleLoadList: [],
    env: {},
    argv: ["node", "/"],
    binding: function(scope) {
      return scopes[scope];
    },
    cwd: function() {
      return "/";
    },
    nextTick: function(fn) {
      setTimeout( fn, 0 );
    },
    stdout: {
      write: function(string) {
        console.log( string.trim() );
      }
    },
    stderr: {
      write: function(string) {
        console.error( string.trim() )
      }
    }
  };
})();

var NativeModule = (function() {
  var name, ref, runInThisContext, _ref;
  runInThisContext = process.binding('evals').NodeScript.runInThisContext;
    
  function NativeModule(id) {
    this.filename = id + '.js';
    this.id = id;
    this.exports = {};
    this.loaded = false;
  }

  NativeModule._source = {}
  NativeModule._cache = {};

  NativeModule.require = function(id) {
    if (id == 'native_module') {
      return NativeModule;
    }

    var cached = NativeModule.getCached(id);
    if (cached) {
      return cached.exports;
    }

    if (!NativeModule.exists(id)) {
      throw new Error('No such native module ' + id);
    }

    process.moduleLoadList.push('NativeModule ' + id);

    var nativeModule = new NativeModule(id);

    nativeModule.compile();
    nativeModule.cache();

    return nativeModule.exports;
  };

  NativeModule.getCached = function(id) {
    return NativeModule._cache[id];
  }

  NativeModule.exists = function(id) {
    return NativeModule._source.hasOwnProperty(id);
  }

  NativeModule.getSource = function(id) {
    return NativeModule._source[id];
  }

  NativeModule.wrap = function(script) {
    // return NativeModule.wrapper[0] + script + NativeModule.wrapper[1];
    return script;
  };

  // NativeModule.wrapper = [
  //   '(function (exports, require, module, __filename, __dirname) { ',
  //   '\n});'
  // ];

  NativeModule.prototype.compile = function() {
    var source = NativeModule.getSource(this.id);
    source = NativeModule.wrap(source);
    var fn = runInThisContext(source, this.filename, true);
    fn(this.exports, NativeModule.require, this, this.filename);

    this.loaded = true;
  };

  NativeModule.prototype.cache = function() {
    NativeModule._cache[this.id] = this;
  };
  ;

  _ref = global.filesystem.modules.api;
  for (name in _ref) {
    ref = _ref[name];
    NativeModule._source[name] = global.filesystem.read(ref);
  }
  return NativeModule;
})();

NativeModule.require("module").runMain();