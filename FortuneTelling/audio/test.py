import ffmpegio
import numpy as np

nframes=1000 # read 16 frames at a time

#with ffmpegio.open('test.mp3', 'ra', blocksize=nframes, sample_fmt='dbl') as file:
with ffmpegio.open('test.mp3', 'ra', blocksize=nframes, sample_fmt='s16') as file:
    for i, indata in enumerate(file):
        volume_norm = np.linalg.norm(indata)*10
        n0 = i*indata # starting sample index
        if (volume_norm.shape):
            t = np.arange(n0,n0+volume_norm.shape[0])/file.sample_rate       
        print (int(volume_norm))