const range = (start: number, stop: number) => Array.from({ length: (stop - start) / 1 + 1 }, (_, i) => start + (i * 1))

export const PROVINCES_DATA =
{
    /*
    AA: {
        name: 'A A',
        bpsCode: 111,
        vehiclePlate: ['A'],
        tel: range(10, 20),
        zipCode: [
            {
                from: 10000,
                to: 20000
            },
        ],
    },
    */
    AC: {
        name: 'Aceh',
        bpsCode: 11,
        vehiclePlate: ['BL'],
        tel: range(641, 659).concat([627, 629]),
        zipCode: [
            {
                from: 23111,
                to: 24794
            }
        ]
    },
    BA: {
        name: 'Bali',
        bpsCode: 51,
        vehiclePlate: ['DK'],
        tel: range(361, 368),
        zipCode: [
            {
                from: 80111,
                to: 82262
            }
        ]
    },
    BB: {
        name: 'Kepulauan Bangka Belitung',
        bpsCode: 19,
        vehiclePlate: ['BN'],
        tel: range(715, 719),
        zipCode: [
            {
                from: 33111,
                to: 33792
            }
        ]
    },
    BE: {
        name: 'Bengkulu',
        bpsCode: 17,
        vehiclePlate: ['BD'],
        tel: range(736, 739).concat([732]),
        zipCode: [
            {
                from: 38113,
                to: 39377
            }
        ]
    },
    BT: {
        name: 'Banten',
        bpsCode: 36,
        vehiclePlate: ['A'],
        tel: range(252, 257),
        zipCode: [
            {
                from: 15111,
                to: 15820
            }, {
                from: 42111,
                to: 42455
            }
        ]
    },
    GO: {
        name: 'Gorontalo',
        bpsCode: 75,
        vehiclePlate: ['DM'],
        tel: [435, 443],
        zipCode: [
            {
                from: 96111,
                to: 96574
            }
        ]
    },
    JA: {
        name: 'Jambi',
        bpsCode: 15,
        vehiclePlate: ['BH'],
        tel: range(740, 748),
        zipCode: [
            {
                from: 36111,
                to: 37574
            }
        ]
    },
    JB: {
        name: 'Jawa Barat',
        bpsCode: 32,
        vehiclePlate: ['D', 'E', 'F', 'T', 'Z'],
        tel: range(231, 234).concat(range(260, 267)).concat([22, 251]),
        zipCode: [
            {
                from: 16110,
                to: 17730
            }, {
                from: 40111,
                to: 46476
            }
        ]
    },
    JI: {
        name: 'Jawa Timur',
        bpsCode: 35,
        vehiclePlate: ['L', 'M', 'N', 'P', 'S', 'W', 'AE', 'AG'],
        tel: range(321, 358).concat([31]),
        zipCode: [
            {
                from: 60111,
                to: 69493
            }
        ]
    },
    JK: {
        name: 'Jakarta',
        bpsCode: 31,
        vehiclePlate: ['B'],
        tel: [21],
        zipCode: [
            {
                from: 10110,
                to: 14540
            }
        ]
    },
    JT: {
        name: 'Jawa Tengah',
        bpsCode: 33,
        vehiclePlate: ['G', 'H', 'K', 'R', 'AA', 'AD'],
        tel: range(271, 299).concat([24, 356]),
        zipCode: [
            {
                from: 50111,
                to: 54474
            }, {
                from: 56111,
                to: 59584
            }
        ]
    },
    KB: {
        name: 'Kalimantan Barat',
        bpsCode: 61,
        vehiclePlate: ['KB'],
        tel: range(564, 568).concat([534]),
        zipCode: [
            {
                from: 78111,
                to: 79682
            }
        ]
    },
    KI: {
        name: 'Kalimantan Timur',
        bpsCode: 64,
        vehiclePlate: ['KT'],
        tel: range(541, 556),
        zipCode: [
            {
                from: 75111,
                to: 77381
            }
        ]
    },
    KR: {
        name: 'Kepulauan Riau',
        bpsCode: 21,
        vehiclePlate: ['BP'],
        tel: range(771, 779),
        zipCode: [
            {
                from: 29111,
                to: 29878
            }
        ]
    },
    KS: {
        name: 'Kalimantan Selatan',
        bpsCode: 63,
        vehiclePlate: ['DA'],
        tel: range(511, 527),
        zipCode: [
            {
                from: 70111,
                to: 72276
            }
        ]
    },
    KT: {
        name: 'Kalimantan Tengah',
        bpsCode: 62,
        vehiclePlate: ['KH'],
        tel: range(513, 539),
        zipCode: [
            {
                from: 73111,
                to: 74874
            }
        ]
    },
    KU: {
        name: 'Kalimantan Utara',
        bpsCode: 65,
        vehiclePlate: ['KU'],
        tel: range(551, 556),
        zipCode: [
            {
                from: 77111,
                to: 77574
            }
        ]
    },
    LA: {
        name: 'Lampung',
        bpsCode: 18,
        vehiclePlate: ['BE'],
        tel: range(721, 729),
        zipCode: [
            {
                from: 34111,
                to: 35686
            }
        ]
    },
    MA: {
        name: 'Maluku',
        bpsCode: 81,
        vehiclePlate: ['DE'],
        tel: range(910, 931),
        zipCode: [
            {
                from: 97114,
                to: 97669
            }
        ]
    },
    MU: {
        name: 'Maluku Utara',
        bpsCode: 82,
        vehiclePlate: ['DG'],
        tel: range(910, 931),
        zipCode: [
            {
                from: 97711,
                to: 97869
            }
        ]
    },
    NB: {
        name: 'Nusa Tenggara Barat',
        bpsCode: 52,
        vehiclePlate: ['DR', 'EA'],
        tel: range(370, 376).concat([364]),
        zipCode: [
            {
                from: 83115,
                to: 84459
            }
        ]
    },
    NT: {
        name: 'Nusa Tenggara Timur',
        bpsCode: 53,
        vehiclePlate: ['DH', 'EB', 'ED'],
        tel: range(380, 389),
        zipCode: [
            {
                from: 85111,
                to: 87284
            }
        ]
    },
    PA: {
        name: 'Papua',
        bpsCode: 94,
        vehiclePlate: ['PA'],
        tel: range(951, 986).concat([901, 902]),
        zipCode: [
            {
                from: 98511,
                to: 99976
            }
        ]
    },
    PB: {
        name: 'Papua Barat',
        bpsCode: 91,
        vehiclePlate: ['PB'],
        tel: range(951, 986).concat([901, 902]),
        zipCode: [
            {
                from: 98011,
                to: 98495
            }
        ]
    },
    RI: {
        name: 'Riau',
        bpsCode: 14,
        vehiclePlate: ['BM'],
        tel: range(760, 769).concat([624]),
        zipCode: [
            {
                from: 28111,
                to: 29569
            }
        ]
    },
    SA: {
        name: 'Sulawesi Utara',
        bpsCode: 71,
        vehiclePlate: ['DB', 'DL'],
        tel: range(430, 438),
        zipCode: [
            {
                from: 95111,
                to: 95999
            }
        ]
    },
    SB: {
        name: 'Sumatra Barat',
        bpsCode: 13,
        vehiclePlate: ['BA'],
        tel: range(751, 759),
        zipCode: [
            {
                from: 25111,
                to: 27779
            }
        ]
    },
    SG: {
        name: 'Sulawesi Tenggara',
        bpsCode: 74,
        vehiclePlate: ['DT'],
        tel: range(401, 408),
        zipCode: [
            {
                from: 93111,
                to: 93963
            }
        ]
    },
    SN: {
        name: 'Sulawesi Selatan',
        bpsCode: 73,
        vehiclePlate: ['DD', 'DP', 'DW'],
        tel: range(410, 421).concat(range(471, 485)).concat([423, 427]),
        zipCode: [
            {
                from: 90111,
                to: 91273
            }, {
                from: 91611,
                to: 92985
            }
        ]
    },
    SR: {
        name: 'Sulawesi Barat',
        bpsCode: 76,
        vehiclePlate: ['DC'],
        tel: [422, 426, 428],
        zipCode: [
            {
                from: 91311,
                to: 91591
            }
        ]
    },
    SS: {
        name: 'Sumatra Selatan',
        bpsCode: 16,
        vehiclePlate: ['BG'],
        tel: range(711, 714).concat(range(730, 735)).concat([702]),
        zipCode: [
            {
                from: 30111,
                to: 32388
            }
        ]
    },
    ST: {
        name: 'Sulawesi Tengah',
        bpsCode: 72,
        vehiclePlate: ['DN'],
        tel: range(445, 465),
        zipCode: [
            {
                from: 94111,
                to: 94981
            }
        ]
    },
    SU: {
        name: 'Sumatra Utara',
        bpsCode: 12,
        vehiclePlate: ['BB', 'BK'],
        tel: range(620, 639).concat([601]),
        zipCode: [
            {
                from: 20111,
                to: 22999
            }
        ]
    },
    YO: {
        name: 'Yogyakarta',
        bpsCode: 34,
        vehiclePlate: ['AB'],
        tel: [274],
        zipCode: [
            {
                from: 55111,
                to: 55893
            }
        ]
    },
};

export type Provinces = keyof typeof PROVINCES_DATA;

export const PROVINCES = Object.keys(PROVINCES_DATA) as Provinces[];