#pragma bank 255

// Tileset: 16

#include "gbs_types.h"

BANKREF(tileset_16)

const struct tileset_t tileset_16 = {
    .n_tiles = 2,
    .tiles = {
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x24, 0x3C, 0x42, 0x7E,
        0x42, 0x7E, 0x24, 0x3C, 0x18, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
    }
};
