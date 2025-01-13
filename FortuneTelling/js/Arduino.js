let serial;
let latestData = "waiting for data";
var portName = "COM5"; 

function arduinosetup() {
  serial = new p5.SerialPort();

  serial.list();

  serial.open("/dev/tty.usbmodem143401");

  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
  serial.open(portName);
}

function serverConnected() {
  print("Connected to Server");
}

function gotList(thelist) {
  print("List of Serial Ports:");
  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}

function gotOpen() {
  print("Serial Port is Open");
}

function gotClose(){
    print("Serial Port is Closed");
    latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}

function gotData() {
  let currentString = serial.readLine();         
}

let s1=0,s2=0,s3=0;

function stepper1(move){
  s1+=move;
  serial.write('x'+s1+" ");
}

function stepper2(move){
  s2+=move;
  serial.write('y'+s2+" ");
}

function servo(move){
  s3+=move;
  console.log(s3);
  serial.write('v'+s3+" ");
}

function reset(){
  stepper1(-s1);
  stepper2(-s2);
  servo(-s3);
}