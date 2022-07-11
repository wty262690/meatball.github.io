/** 
 * Brownian Motion (v3.0.0)
 * by  Ammon.Owed (2013/Aug)
 * mod GoToLoop
 *
 * Forum.Processing.org/two/discussion/2829/fifo-queue-problem-with-code#Item_1
 *
 * OpenProcessing.org/sketch/878458
 * Bl.ocks.org/GoToLoop/145418d1dfb062c7c41a630bce5b8374
 */

import java.util.Queue;
import java.util.ArrayDeque; // not needed anymore

static final String TITLE1 = "Brownian Motion   FPS: ", TITLE2 = "   Size: ";

static final boolean JAVA = 1/2 != 1/2.;
static final boolean HAS_MAX_LIMIT = false;

static final int DIM = 100, LIMIT = 03000, DETAIL = 1000, DEPTH = 2000;
static final int HUE = 1 << 10, HUE_M1 = HUE - 1;
static final int FPS = 60, MIN_FPS = 40, SMOOTH = 2;
static final float BOLD = 1.5, AMP = 10;

//final Queue<PVector> points = new ArrayDeque<PVector>(LIMIT);
final Queue<PVector> points = new ArrayQueue<PVector>(LIMIT);
final PVector cam = new PVector(), lp = new PVector();

float canvasRatio, zNear, zFar;
boolean paused;

void setup() {
  size(950, 600, P3D);

  smooth(SMOOTH);
  frameRate(FPS);

  colorMode(HSB, HUE, 1, 1);
  strokeWeight(BOLD);
  noFill();

  canvasRatio = (float) width/height;

  final float camZ = .5 * height / tan(PI * FPS / 360);
  zNear = camZ / AMP;
  zFar  = camZ * AMP;

  frameRate = LIMIT << 1;
}

void draw() {
  // Local-cached & short-named variables:
  final int fr = round(frameRate), len = points.size();
  int fc = frameCount;

  if (JAVA)  surface.setTitle(TITLE1 + fr + TITLE2 + len);

  // Recycled or new vector point:
  final PVector np = len != 0 &&
    (!HAS_MAX_LIMIT && fr <= MIN_FPS || HAS_MAX_LIMIT && len >= LIMIT)?
    points.remove() : new PVector();

  // Interpolated rotating camera aimed at latest added point (tail):
  cam.mult(.99);
  cam.add(PVector.mult(lp, .01, np));

  camera(
    cam.x + sin(.01 * fc) * DETAIL, 
    cam.y + cos(8e-3 * fc + 10) * DETAIL, 
    cam.z - DEPTH, 
    cam.x, cam.y, cam.z, 
    0, 1, 0
    );

  //perspective();
  perspective(THIRD_PI, canvasRatio, zNear, zFar);

  // Draw colored curved lines:
  background(0);

  beginShape();
  for (final PVector p : points) {
    stroke(fc++ & HUE_M1, 1, 1);
    curveVertex(p.x, p.y, p.z);
  }
  endShape();

  // Generate a new point at specified range:
  PVector.random3D(np, this).mult(DIM); // pick a new random direction.
  np.add(lp);                           // add that up from latest point.
  lp.set(np);                           // this is now the latest point too.
  points.add(np);                       // add new point to queue's tail.
}

void mousePressed() {
  if (mouseButton == RIGHT)  points.clear();
  else if (paused ^= true)   noLoop();
  else                       loop();
}