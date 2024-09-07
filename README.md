# truecaller-sdk 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Truecaller Verification</title>
    <script
        type="text/javascript"
        src="https://sdk.truecaller.com/v2.0/truecaller-sdk.js"
        async
    ></script>
</head>
<body>
    <h2>Truecaller Verification</h2>
    <div id="truecaller-login"></div>
    <script>
        window.onload = function () {
            TruecallerSDK.init({
                clientId: "7dB6bab5f95bd24014da2a373d87bc6f397f0", 
                callbackUrl: "https://verification-sdk-console.truecaller.com/dashboard/apps/sie59548bede9547bdb15613d7d6c66aa0", 
                redirect: true,
                mobileOnly: true
            });
            TruecallerSDK.login(document.getElementById("truecaller-login"), function (response) {
                console.log(response);
            });
        };
    </script>
</body>
</html>
