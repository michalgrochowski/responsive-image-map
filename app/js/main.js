$(document).ready(function() {
    $('#apart').mapster({
        mapKey: 'number',
        listKey: 'number',
        fillColor: '333333',
        fillOpacity: 0.1,
        strokeWidth: 4,
        stroke: true,
        staticState: true,
        render_highlight: {
            fillColor: '333333',
            fillOpacity: 0.5,
            stroke: true
        },
        areas: [
        {
            key: '00',
            strokeColor: "32ed2f"
        },
        {
            key: '01',
            strokeColor: "eda02f"  
        },
        {
            key: '02',
            strokeColor: "ed2f2f"          
        },
        {
            key: '03',
            strokeColor: "ed2f2f"        
        },
        {
            key: '04',
            strokeColor: "ed2f2f"         
        },
        {
            key: '05',
            strokeColor: "32ed2f"           
        },
        {
            key: '06',
            strokeColor: "ed2f2f"         
        },
        {
            key: '07',
            strokeColor: "eda02f"         
        },
        {
            key: '08',
            strokeColor: "32ed2f"          
        },
        {
            key: '09',
            strokeColor: "32ed2f"            
        }
    ],
    });
});