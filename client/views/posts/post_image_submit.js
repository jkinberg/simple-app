Meteor.subscribe("images");

Template.postImageSubmit.helpers({
  imagesCollection: function() {
    return Images;
  },
  images: function() {
    return Images.find();
  }
});

Template.postImageSubmit.events({
  'change .myFileInput': function(e, tmpl) {
    e.preventDefault();
    FS.Utility.eachFile(e, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        console.log(fileObj._id);
      });
    });
  }
});

/*
var BinaryFileReader = {
  read: function (file, callback) {
    var reader = new FileReader;
    
    var fileInfo = {
      name: file.name,
      type: file.type,
      size: file.size,
      file: null
    };
    
    reader.onload = function() {
      fileInfo.file = reader.result;
      callback(null, fileInfo);
    };
    
    reader.onerror = function() {
      callback(reader.error)
    };
    
    reader.readAsArrayBuffer(file);    
  }
};

Template.postImageSubmit.events({
  'submit form': function (e, tmpl) {
    e.preventDefault();
    var fileInput = tmpl.find('input[type=file]');
    var fileList = fileInput.files;
    
    for (var i = 0; i < fileList.length; i++) {
      BinaryFileReader.read(fileList[i], function (err, fileInfo) {
        console.log(fileInfo);
      });
    }
  }
});
*/