function diagonalDifference(arr) {
    let y =0;
    let fd =0;
    let sd =0;
    for(let i =0; i<arr.length; i++){
        fd=arr[i][y]+fd;
        y++;
    }
    y=arr.length-1;
        for(let i =0; i<arr.length; i++){
        sd=arr[i][y]+sd;
        y--;
    }
    return Math.abs(sd-fd)

}