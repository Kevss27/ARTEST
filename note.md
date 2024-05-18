<!DOCTYPE html>
<html>
<head>
    <title>COKE-model</title>
    <!-- AR.js with A-Frame -->
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>

    <style>
        .btn1:hover, .btn2:hover, .btn3:hover, .btn4:hover {
            background-color: rgb(65, 65, 189);
            cursor: pointer;
        }
        .btn1, .btn2, .btn3, .btn4 {
            position: fixed;
            z-index: 1000000;
            top: 10px;
            padding: 2px 8px;
            background-color: blue;
            color: white;
            border: 1px solid black;
            border-radius: 10px;
            margin-right: 10px;
        }
        .btn1 { left: 10px; }
        .btn2 { left: 100px; }
        .btn3 { left: 190px; }
        .btn4 { left: 280px; }
        #history-content {
            display: none;
            padding: 10px;
            background: white;
            border: 2px solid black;
            border-radius: 10px;
            position: fixed;
            bottom: 10px;
            left: 10px;
            z-index: 1000000;
        }
    </style>
    
</head>
<body style="margin: 0; overflow: hidden;">
    <a-scene embedded arjs vr-mode-ui="enabled: false">
        <!-- QR Code Target -->
        <a-marker preset="hiro">
            <!-- 3D Model of the Coke -->
            <a-entity id="display-model" gltf-model="#coke-asset" scale="0.5 0.5 0.5" position="0 1 0"></a-entity>
                        
            <!-- Text indicating the name of the brand -->
            <a-text value="COKE" position="0 0 0" color="red"></a-text>
        </a-marker>
    
        <!-- 3D Model of the coke's -->
        <a-assets>
            <a-asset-item id="coke-asset" src="/content/french_coke_can/scene.gltf"></a-asset-item>
            <a-asset-item id="pepsi-asset" src="/content/pepsi_can/scene.gltf"></a-asset-item>
            <a-asset-item id="mountaindew-asset" src="/content/mountain_dew_smashed_up/scene.gltf"></a-asset-item>
        </a-assets>
        
    </a-scene>

    <div>
        <button id="btn-coke" class="btn1">Coke</button>
        <button id="btn-pepsi" class="btn2">Pepsi</button>
        <button id="btn-mountaindew" class="btn3">MtnDew</button>
        <button id="btn-history" class="btn4">History</button>
    </div>
    <div id="history-content">History content will be inserted here</div>
    
    <script>
    let selectedModel = 'coke-asset'; // default model

    function switchModel(modelId) {
        selectedModel = modelId;
        const displayModel = document.getElementById('display-model');
        displayModel.setAttribute('gltf-model', `#${modelId}`);
        console.log(`Model switched to: #${modelId}`);
    }

    window.onload = function () {
        document.getElementById('btn-coke').addEventListener('click', function() {
            switchModel('coke-asset');
        });

        document.getElementById('btn-pepsi').addEventListener('click', function() {
            switchModel('pepsi-asset');
        });

        document.getElementById('btn-mountaindew').addEventListener('click', function() {
            switchModel('mountaindew-asset');
        });

        document.getElementById('btn-history').addEventListener('click', function() {
            const historyContent = document.getElementById('history-content');
            if (selectedModel) {
                let modelName = selectedModel.split('-')[0].toUpperCase();
                historyContent.innerHTML = `${modelName} was selected`;
                historyContent.style.display = 'block';
            } else {
                historyContent.innerHTML = 'No model selected';
                historyContent.style.display = 'block';
            }
        });
    };
    </script>
</body>
</html>
