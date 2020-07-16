/**
 * Nusantara Valid: province.extended.ts
 *
 * Licensed under MIT (https://github.com/magicjar/nusantara-valid/blob/master/LICENSE)
**/

import { PROVINCE_DATA } from '../province';
import { MergeRecursive } from '../../helpers/index.extended';

/**
 * PROVINCE_EXTENDED_DATA
 *
 * List of extended province data of Indonesia like regencies and districts
**/
export const PROVINCE_DATA_EXTENSION =
{
    AC: {
        regencies: [
            {
                name: 'Aceh Selatan',
                bpsCode: '11.01',
                districts: [
                   { name: 'Bakongan', bpsCode: '11.01.01' },
                   { name: 'Kluet Utara', bpsCode: '11.01.02' },
                   { name: 'Kluet Selatan', bpsCode: '11.01.03' },
                   { name: 'Labuhan Haji', bpsCode: '11.01.04' },
                   { name: 'Meukek', bpsCode: '11.01.05' },
                   { name: 'Samadua', bpsCode: '11.01.06' },
                   { name: 'Sawang', bpsCode: '11.01.07' },
                   { name: 'Tapaktuan', bpsCode: '11.01.08' },
                   { name: 'Trumon', bpsCode: '11.01.09' },
                   { name: 'Pasi Raja', bpsCode: '11.01.10', },
                   { name: 'Labuhan Haji Timur', bpsCode: '11.01.11' },
                   { name: 'Labuhan Haji Barat', bpsCode: '11.01.12' },
                   { name: 'Kluet Tengah', bpsCode: '11.01.13' },
                   { name: 'Kluet Timur', bpsCode: '11.01.14' },
                   { name: 'Bakongan Timur', bpsCode: '11.01.15' },
                   { name: 'Trumon Timur', bpsCode: '11.01.16' },
                   { name: 'Kota Bahagia', bpsCode: '11.01.17' },
                   { name: 'Trumon Tengah', bpsCode: '11.01.18' }
                ]
            }, {
                name: 'Aceh Tenggara',
                bpsCode: '11.02',
                districts: [
                    { name: 'Lawe Alas', bpsCode: '11.02.01' },
                    { name: 'Lawe Sigala Gala', bpsCode: '11.02.02' },
                    { name: 'Bambel', bpsCode: '11.02.03' },
                    { name: 'Babussalam', bpsCode: '11.02.04' },
                    { name: 'Badar', bpsCode: '11.02.05' },
                    { name: 'Babul Makmur', bpsCode: '11.02.06' },
                    { name: 'Darul Hasanah', bpsCode: '11.02.07' },
                    { name: 'Lawe Bulan', bpsCode: '11.02.08' },
                    { name: 'Bukit Tusam', bpsCode: '11.02.09' },
                    { name: 'Semadam', bpsCode: '11.02.10' },
                    { name: 'Babul Rahmah', bpsCode: '11.02.11' },
                    { name: 'Ketambe', bpsCode: '11.02.12' },
                    { name: 'Deleng Pokhkisen', bpsCode: '11.02.13' },
                    { name: 'Lawe Sumur', bpsCode: '11.02.14' },
                    { name: 'Tanoh Alas', bpsCode: '11.02.15' },
                    { name: 'Leuser', bpsCode: '11.02.16' }
                ]
            }, {
                name: 'Aceh Timur',
                bpsCode: '11.03',
                districts: [
                    { name: 'Darul Aman', bpsCode: '11.03.01' },
                    { name: 'Julok', bpsCode: '11.03.02' },
                    { name: 'Idi Rayeuk', bpsCode: '11.03.03' },
                    { name: 'Birem Bayeun', bpsCode: '11.03.04' },
                    { name: 'Serbajadi', bpsCode: '11.03.05' }, 
                    { name: 'Nurussalam', bpsCode: '11.03.06' }, 
                    { name: 'Peureulak', bpsCode: '11.03.07' }, 
                    { name: 'Rantau Selamat', bpsCode: '11.03.08' }, 
                    { name: 'Simpang Ulim', bpsCode: '11.03.09' }, 
                    { name: 'Rantau Peureulak', bpsCode: '11.03.10' }, 
                    { name: 'Pante Bidari', bpsCode: '11.03.11' }, 
                    { name: 'Madat', bpsCode: '11.03.12' }, 
                    { name: 'Indra Makmu', bpsCode: '11.03.13' }, 
                    { name: 'Idi Tunong', bpsCode: '11.03.14' }, 
                    { name: 'Banda Alam', bpsCode: '11.03.15' }, 
                    { name: 'Peudawa', bpsCode: '11.03.16' }, 
                    { name: 'Peureulak Timur', bpsCode: '11.03.17' }, 
                    { name: 'Peureulak Barat', bpsCode: '11.03.18' }, 
                    { name: 'Sungai Raya', bpsCode: '11.03.19' }, 
                    { name: 'Simpang Jernih', bpsCode: '11.03.20' }, 
                    { name: 'Darul Iksan', bpsCode: '11.03.21' }, 
                    { name: 'Darul Falah', bpsCode: '11.03.22' }, 
                    { name: 'Idi Timur', bpsCode: '11.03.23' }, 
                    { name: 'Peunaron', bpsCode: '11.03.24' }
                ]
            }, {
                name: 'Aceh Tengah',
                bpsCode: '11.04',
                districts: [
                    { name: 'Linge', bpsCode: '11.04.01' }, 
                    { name: 'Silih Nara', bpsCode: '11.04.02' }, 
                    { name: 'Bebesen', bpsCode: '11.04.03' }, 
                    { name: 'Pegasing', bpsCode: '11.04.07' }, 
                    { name: 'Bintang', bpsCode: '11.04.08' }, 
                    { name: 'Ketol', bpsCode: '11.04.10' }, 
                    { name: 'Kebayakan', bpsCode: '11.04.11' }, 
                    { name: 'Kute Panang', bpsCode: '11.04.12' }, 
                    { name: 'Celala', bpsCode: '11.04.13' }, 
                    { name: 'Laut Tawar', bpsCode: '11.04.17' }, 
                    { name: 'Atu Lintang', bpsCode: '11.04.18' }, 
                    { name: 'Jagong Jeget', bpsCode: '11.04.19' }, 
                    { name: 'Bies', bpsCode: '11.04.20' }, 
                    { name: 'Rusip Antara', bpsCode: '11.04.21' }
                ]
            }, {
                name: 'Aceh Barat',
                bpsCode: '11.05',
                districts: [
                    { name: 'Johan Pahwalan', bpsCode: '11.05.01' },
                    { name: 'Kaway XVI', bpsCode: '11.05.02' }, 
                    { name: 'Sungai Mas', bpsCode: '11.05.03' }, 
                    { name: 'Woyla', bpsCode: '11.05.04' }, 
                    { name: 'Samatiga', bpsCode: '11.05.05' }, 
                    { name: 'Bubon', bpsCode: '11.05.06' }, 
                    { name: 'Arongan Lambalek', bpsCode: '11.05.07' }, 
                    { name: 'Pante Ceureumen', bpsCode: '11.05.08' }, 
                    { name: 'Meureubo', bpsCode: '11.05.09' }, 
                    { name: 'Moyla Barat', bpsCode: '11.05.10' }, 
                    { name: 'Woyla Timur', bpsCode: '11.05.11' }, 
                    { name: 'Panton Reu', bpsCode: '11.05.12' }
                ]
            }, {
                name: 'Aceh Besar',
                bpsCode: '11.06',
                districts: [
                    { name: 'Lhoong', bpsCode: '11.06.01' }, 
                    { name: 'Lhoknga', bpsCode: '11.06.02' }, 
                    { name: 'Indrapuri', bpsCode: '11.06.03' }, 
                    { name: 'Seulimeum', bpsCode: '11.06.04' }, 
                    { name: 'Mantasiek', bpsCode: '11.06.05' }, 
                    { name: 'Sukamakmur', bpsCode: '11.06.06' }, 
                    { name: 'Darul Imarah', bpsCode: '11.06.07' }, 
                    { name: 'Peukan Bada', bpsCode: '11.06.08' }, 
                    { name: 'Mesjid Raya', bpsCode: '11.06.09' }, 
                    { name: 'Ingin Jaya', bpsCode: '11.06.10' }, 
                    { name: 'Kuta Baro', bpsCode: '11.06.11' }, 
                    { name: 'Darussalam', bpsCode: '11.06.12' }, 
                    { name: 'Pulo Aceh', bpsCode: '11.06.13' }, 
                    { name: 'Lembah Seulawah', bpsCode: '11.06.14' }, 
                    { name: 'Kota Jantho', bpsCode: '11.06.15' }, 
                    { name: 'Kota Cot Glie', bpsCode: '11.06.16' }, 
                    { name: 'Kota Malaka', bpsCode: '11.06.17' }, 
                    { name: 'Simpang Tiga', bpsCode: '11.06.18' }, 
                    { name: 'Darul Kamal', bpsCode: '11.06.19' }, 
                    { name: 'Baitussalam', bpsCode: '11.06.20' }, 
                    { name: 'Krueng Barona Jaya', bpsCode: '11.06.21' }, 
                    { name: 'Keupung', bpsCode: '11.06.22' }, 
                    { name: 'Blang Bintang', bpsCode: '11.06.23' }
                ]
            }, {
                name: 'Pidie',
                bpsCode: '11.07',
                districts: [
                    { name: 'Batee', bpsCode: '11.07.03' }, 
                    { name: 'Delima', bpsCode: '11.07.04' }, 
                    { name: 'Geumpang', bpsCode: '11.07.05' }, 
                    { name: 'Geulumpang Tiga', bpsCode: '11.07.06' }, 
                    { name: 'Indra Jaya', bpsCode: '11.07.07' }, 
                    { name: 'Kembang Tanjong', bpsCode: '11.07.08' }, 
                    { name: 'Kota Sigli', bpsCode: '11.07.09' }, 
                    { name: 'Mila', bpsCode: '11.07.11' }, 
                    { name: 'Muara Tiga', bpsCode: '11.07.12' }, 
                    { name: 'Mutiara', bpsCode: '11.07.13' }, 
                    { name: 'Padang Tiji', bpsCode: '11.07.14' }, 
                    { name: 'Peukan Baro', bpsCode: '11.07.15' }, 
                    { name: 'Pide', bpsCode: '11.07.16' }, 
                    { name: 'Sakti', bpsCode: '11.07.17' }, 
                    { name: 'Simpang Tiga', bpsCode: '11.07.18' }, 
                    { name: 'Tangse', bpsCode: '11.07.19' }, 
                    { name: 'Tiro/Truseb', bpsCode: '11.07.21' }, 
                    { name: 'Keumala', bpsCode: '11.07.22' }, 
                    { name: 'Mutiara Timur', bpsCode: '11.07.24' }, 
                    { name: 'Grong Grong', bpsCode: '11.07.25' }, 
                    { name: 'Mane', bpsCode: '11.07.27' }, 
                    { name: 'Glumpang Baro', bpsCode: '11.07.29' }, 
                    { name: 'Titeue', bpsCode: '11.07.31' },
                ]
            }, {
                name: 'Aceh Utara',
                bpsCode: '11.08',
                districts: [
                    { name: "Baktiya", bpsCode: "11.08.01" },
                    { name: "Dewantara", bpsCode: "11.08.02" },
                    { name: "Kuta Makmur", bpsCode: "11.08.03" },
                    { name: "Lhoksukon", bpsCode: "11.08.04" },
                    { name: "Matangkuli", bpsCode: "11.08.05" },
                    { name: "Muara Batu", bpsCode: "11.08.06" },
                    { name: "Meurah Mulia", bpsCode: "11.08.07" },
                    { name: "Samudera", bpsCode: "11.08.08" },
                    { name: "Seunuddon (Seunudon)", bpsCode: "11.08.09" },
                    { name: "Syamtalira Aron", bpsCode: "11.08.10" },
                    { name: "Syamtalira Bayu", bpsCode: "11.08.11" },
                    { name: "Tanah Luas", bpsCode: "11.08.12" },
                    { name: "Tanah Pasir", bpsCode: "11.08.13" },
                    { name: "Tanah Jambo Aye", bpsCode: "11.08.14" },
                    { name: "Sawang", bpsCode: "11.08.15" },
                    { name: "Nisam", bpsCode: "11.08.16" },
                    { name: "Cot Girek", bpsCode: "11.08.17" },
                    { name: "Langkahan", bpsCode: "11.08.18" },
                    { name: "Baktiya Barat", bpsCode: "11.08.19" },
                    { name: "Paya Bakong", bpsCode: "11.08.20" },
                    { name: "Nibong", bpsCode: "11.08.21" },
                    { name: "Simpang Kramat (Keramat)", bpsCode: "11.08.22" },
                    { name: "Lapang", bpsCode: "11.08.23" },
                    { name: "Pirak Timur", bpsCode: "11.08.24" },
                    { name: "Geuredong Pase", bpsCode: "11.08.25" },
                    { name: "Banda Baro", bpsCode: "11.08.26" },
                    { name: "Nisam Antara", bpsCode: "11.08.27" }
                ]
            }, {
                name: 'Simeulue',
                bpsCode: '11.09',
                districts: [
                    { name: "Alapan (Alafan)", bpsCode: "11.09.08" },
                    { name: "Salang", bpsCode: "11.09.02" },
                    { name: "Simeulue Barat (Simeuleu Barat)", bpsCode: "11.09.06" },
                    { name: "Simeulue Cut", bpsCode: "11.09.10" },
                    { name: "Simeulue Tengah (Simeuleu Tengah)", bpsCode: "11.09.01" },
                    { name: "Simeulue Timur (Simeuleu Timur)", bpsCode: "11.09.04" },
                    { name: "Teluk Dalam", bpsCode: "11.09.05" },
                    { name: "Teupah Barat", bpsCode: "11.09.03" },
                    { name: "Teupah Selatan", bpsCode: "11.09.07" },
                    { name: "Teupah Tengah", bpsCode: "11.09.09" }
                ]
            }, {
                name: 'Aceh Singkil',
                bpsCode: '11.10',
                districts: [
                    { name: "Pulau Banyak", bpsCode: "11.10.01" },
                    { name: "Simpang Kanan", bpsCode: "11.10.02" },
                    { name: "Singkil", bpsCode: "11.10.04" },
                    { name: "Gunung Meriah (Mariah)", bpsCode: "11.10.06" },
                    { name: "Kota Baharu", bpsCode: "11.10.09" },
                    { name: "Singkil Utara", bpsCode: "11.10.10" },
                    { name: "Danau Paris", bpsCode: "11.10.11" },
                    { name: "Suro Makmur", bpsCode: "11.10.12" },
                    { name: "Singkohor", bpsCode: "11.10.13" },
                    { name: "Kuala Baru", bpsCode: "11.10.14" },
                    { name: "Pulau Banyak Barat", bpsCode: "11.10.16" }
                ]
            }, {
                name: 'Bireuen',
                bpsCode: '11.11',
                districts: [
                    { name: "Samalanga", bpsCode: "11.11.01" },
                    { name: "Jeunieb", bpsCode: "11.11.02" },
                    { name: "Peudada", bpsCode: "11.11.03" },
                    { name: "Jeumpa", bpsCode: "11.11.04" },
                    { name: "Peusangan", bpsCode: "11.11.05" },
                    { name: "Makmur", bpsCode: "11.11.06" },
                    { name: "Gandapura (Ganda Pura)", bpsCode: "11.11.07" },
                    { name: "Pandrah", bpsCode: "11.11.08" },
                    { name: "Juli", bpsCode: "11.11.09" },
                    { name: "Jangka", bpsCode: "11.11.10" },
                    { name: "Simpang Mamplam", bpsCode: "11.11.11" },
                    { name: "Peulimbang (Plimbang)", bpsCode: "11.11.12" },
                    { name: "Kota Juang", bpsCode: "11.11.13" },
                    { name: "Kuala", bpsCode: "11.11.14" },
                    { name: "Peusangan Siblah Krueng", bpsCode: "11.11.15" },
                    { name: "Peusangan Selatan", bpsCode: "11.11.16" },
                    { name: "Kuta Blang", bpsCode: "11.11.17" }
                ]
            }, {
                name: 'Aceh Barat Daya',
                bpsCode: '11.12',
                districts: [
                    { name: "Blang Pidie", bpsCode: "11.12.01" },
                    { name: "Tangan-Tangan", bpsCode: "11.12.02" },
                    { name: "Manggeng", bpsCode: "11.12.03" },
                    { name: "Susoh", bpsCode: "11.12.04" },
                    { name: "Kuala Batee", bpsCode: "11.12.05" },
                    { name: "Babah Rot", bpsCode: "11.12.06" },
                    { name: "Setia", bpsCode: "11.12.07" },
                    { name: "Jeumpa", bpsCode: "11.12.08" },
                    { name: "Lembah Sabil", bpsCode: "11.12.09" }
                ]
            }, {
                name: 'Gayo Lues',
                bpsCode: '11.13',
                districts: [
                    { name: "Blangkejeren (Blang Kejeren)", bpsCode: "11.13.01" },
                    { name: "Kutapanjang (Kuta Panjang)", bpsCode: "11.13.02" },
                    { name: "Rikit Gaib", bpsCode: "11.13.03" },
                    { name: "Terangun (Terangon)", bpsCode: "11.13.04" },
                    { name: "Pining (Pinding)", bpsCode: "11.13.05" },
                    { name: "Blangpegayon (Blang Pegayon)", bpsCode: "11.13.06" },
                    { name: "Puteri Betung (Putri Betung)", bpsCode: "11.13.07" },
                    { name: "Dabun Gelang (Debun Gelang)", bpsCode: "11.13.08" },
                    { name: "Blangjerango (Blang Jerango)", bpsCode: "11.13.09" },
                    { name: "Teripe/Tripe Jaya", bpsCode: "11.13.10" },
                    { name: "Pantan Cuaca", bpsCode: "11.13.11" }
                ]
            }, {
                name: 'Aceh Jaya',
                bpsCode: '11.14',
                districts: [
                    { name: "Teunom", bpsCode: "11.14.01" },
                    { name: "Krueng Sabee", bpsCode: "11.14.02" },
                    { name: "Setia Bhakti (Setia Bakti)", bpsCode: "11.14.03" },
                    { name: "Sampoiniet", bpsCode: "11.14.04" },
                    { name: "Jaya", bpsCode: "11.14.05" },
                    { name: "Panga (Keude Panga)", bpsCode: "11.14.06" },
                    { name: "Indra Jaya", bpsCode: "11.14.07" },
                    { name: "Darul Hikmah", bpsCode: "11.14.08" },
                    { name: "Pasie Raya", bpsCode: "11.14.09" }
                ]
            }, {
                name: 'Nagan Raya',
                bpsCode: '11.15',
                districts: [
                    { name: "Kuala", bpsCode: "11.15.01" },
                    { name: "Seunagan", bpsCode: "11.15.02" },
                    { name: "Seunagan Timur", bpsCode: "11.15.03" },
                    { name: "Beutong", bpsCode: "11.15.04" },
                    { name: "Darul Makmur", bpsCode: "11.15.05" },
                    { name: "Suka Makmue", bpsCode: "11.15.06" },
                    { name: "Kuala Pesisir", bpsCode: "11.15.07" },
                    { name: "Tadu Raya", bpsCode: "11.15.08" },
                    { name: "Tripa Makmur", bpsCode: "11.15.09" },
                    { name: "Beutong Ateuh Banggalang", bpsCode: "11.15.10" }
                ]
            }, {
                name: 'Aceh Tamiang',
                bpsCode: '11.16',
                districts: [
                    { name: "Manyak Payed", bpsCode: "11.16.01" },
                    { name: "Bendahara", bpsCode: "11.16.02" },
                    { name: "Karang Baru", bpsCode: "11.16.03" },
                    { name: "Seruway", bpsCode: "11.16.04" },
                    { name: "Kota Kualasinpang (Kota Kuala Simpang)", bpsCode: "11.16.05" },
                    { name: "Kejuruan Muda", bpsCode: "11.16.06" },
                    { name: "Tamiang Hulu", bpsCode: "11.16.07" },
                    { name: "Rantau", bpsCode: "11.16.08" },
                    { name: "Banda Mulia", bpsCode: "11.16.09" },
                    { name: "Bandar Pusaka", bpsCode: "11.16.10" },
                    { name: "Tenggulun", bpsCode: "11.16.11" },
                    { name: "Sekerak", bpsCode: "11.16.12" }
                ]
            }, {
                name: 'Bener Meriah',
                bpsCode: '11.17',
                districts: [
                    { name: "Pintu Rime Gayo", bpsCode: "11.17.01" },
                    { name: "Permata", bpsCode: "11.17.02" },
                    { name: "Syiah Utama", bpsCode: "11.17.03" },
                    { name: "Bandar", bpsCode: "11.17.04" },
                    { name: "Bukit", bpsCode: "11.17.05" },
                    { name: "Wih Pesam", bpsCode: "11.17.06" },
                    { name: "Timang Gajah", bpsCode: "11.17.07" },
                    { name: "Bener Kelipah", bpsCode: "11.17.08" },
                    { name: "Mesidah", bpsCode: "11.17.09" },
                    { name: "Gajah Putih", bpsCode: "11.17.10" }
                ]
            }, {
                name: 'Pide Jaya',
                bpsCode: '11.18',
                districts: [
                    { name: "Meureudu", bpsCode: "11.18.01" },
                    { name: "Ulim", bpsCode: "11.18.02" },
                    { name: "Jangka Buaya (Jangka Buya)", bpsCode: "11.18.03" },
                    { name: "Bandar Dua", bpsCode: "11.18.04" },
                    { name: "Meurah Dua", bpsCode: "11.18.05" },
                    { name: "Bandar Baru", bpsCode: "11.18.06" },
                    { name: "Panteraja", bpsCode: "11.18.07" },
                    { name: "Trienggadeng", bpsCode: "11.18.08" }
                ]
            }, {
                name: 'Banda Aceh',
                bpsCode: '11.71',
                districts: [
                    { name: "Baiturrahman", bpsCode: "11.71.01" },
                    { name: "Kuta Alam", bpsCode: "11.71.02" },
                    { name: "Meuraxa", bpsCode: "11.71.03" },
                    { name: "Syiah Kuala", bpsCode: "11.71.04" },
                    { name: "Lueng Bata", bpsCode: "11.71.05" },
                    { name: "Kuta Raja", bpsCode: "11.71.06" },
                    { name: "Banda Raya", bpsCode: "11.71.07" },
                    { name: "Jaya Baru", bpsCode: "11.71.08" },
                    { name: "Ulee Kareng", bpsCode: "11.71.09" }
                ]
            }, {
                name: 'Sabang',
                bpsCode: '11.72',
                districts: [
                    { name: "Sukakarya", bpsCode: "11.72.01" },
                    { name: "Sukajaya", bpsCode: "11.72.02" }
                ]
            }, {
                name: 'Lhokseumawe',
                bpsCode: '11.73',
                districts: [
                    { name: "Muara Dua", bpsCode: "11.73.01" },
                    { name: "Banda Sakti", bpsCode: "11.73.02" },
                    { name: "Blang Mangat", bpsCode: "11.73.03" },
                    { name: "Muara Satu", bpsCode: "11.73.04" }
                ]
            }, {
                name: 'Langsa',
                bpsCode: '11.74',
                districts: [
                    { name: "Langsa Timur", bpsCode: "11.74.01" },
                    { name: "Langsa Barat", bpsCode: "11.74.02" },
                    { name: "Langsa Kota", bpsCode: "11.74.03" },
                    { name: "Langsa Lama", bpsCode: "11.74.04" },
                    { name: "Langsa Baro", bpsCode: "11.74.05" }
                ]
            }, {
                name: 'Subulussalam',
                bpsCode: '11.75',
                districts: [
                    { name: "Penanggalan", bpsCode: "11.75.02" },
                    { name: "Rundeng", bpsCode: "11.75.03" },
                    { name: "Longkib", bpsCode: "11.75.05" }
                ]
            },
        ]
    },
    BA: {
        regencies: []
    },
    BB: {
        regencies: []
    },
    BE: {
        regencies: []
    },
    BT: {
        regencies: []
    },
    GO: {
        regencies: []
    },
    JA: {
        regencies: []
    },
    JB: {
        regencies: []
    },
    JI: {
        regencies: []
    },
    JK: {
        regencies: []
    },
    JT: {
        regencies: []
    },
    KB: {
        regencies: []
    },
    KI: {
        regencies: []
    },
    KR: {
        regencies: []
    },
    KS: {
        regencies: []
    },
    KT: {
        regencies: []
    },
    KU: {
        regencies: []
    },
    LA: {
        regencies: []
    },
    MA: {
        regencies: []
    },
    MU: {
        regencies: []
    },
    NB: {
        regencies: []
    },
    NT: {
        regencies: []
    },
    PA: {
        regencies: []
    },
    PB: {
        regencies: []
    },
    RI: {
        regencies: []
    },
    SA: {
        regencies: []
    },
    SB: {
        regencies: []
    },
    SG: {
        regencies: []
    },
    SN: {
        regencies: []
    },
    SR: {
        regencies: []
    },
    SS: {
        regencies: []
    },
    ST: {
        regencies: []
    },
    SU: {
        regencies: []
    },
    YO: {
        regencies: [
            {
                name: 'Kabupaten Kulon Progo',
                bpsCode: '34.01',
                districts: [
                    { name: "Temon", bpsCode: "34.01.01" },
                    { name: "Wates", bpsCode: "34.01.02" },
                    { name: "Panjatan", bpsCode: "34.01.03" },
                    { name: "Galur", bpsCode: "34.01.04" },
                    { name: "Lendah", bpsCode: "34.01.05" },
                    { name: "Sentolo", bpsCode: "34.01.06" },
                    { name: "Pengasih", bpsCode: "34.01.07" },
                    { name: "Kokap", bpsCode: "34.01.08" },
                    { name: "Girimulyo", bpsCode: "34.01.09" },
                    { name: "Nanggulan", bpsCode: "34.01.10" },
                    { name: "Samigaluh", bpsCode: "34.01.11" },
                    { name: "Kalibawang", bpsCode: "34.01.12" }
                ]
            },  {
                name: 'Kabupaten Bantul',
                bpsCode: '34.02',
                districts: [
                    { name: "Srandakan", bpsCode: "34.02.01" },
                    { name: "Sanden", bpsCode: "34.02.02" },
                    { name: "Kretek", bpsCode: "34.02.03" },
                    { name: "Pundong", bpsCode: "34.02.04" },
                    { name: "Bambanglipuro (Bambang Lipuro)", bpsCode: "34.02.05" },
                    { name: "Pandak", bpsCode: "34.02.06" },
                    { name: "Pajangan", bpsCode: "34.02.07" },
                    { name: "Bantul", bpsCode: "34.02.08" },
                    { name: "Jetis", bpsCode: "34.02.09" },
                    { name: "Imogiri", bpsCode: "34.02.10" },
                    { name: "Dlingo", bpsCode: "34.02.11" },
                    { name: "Banguntapan", bpsCode: "34.02.12" },
                    { name: "Pleret", bpsCode: "34.02.13" },
                    { name: "Piyungan", bpsCode: "34.02.14" },
                    { name: "Sewon", bpsCode: "34.02.15" },
                    { name: "Kasihan", bpsCode: "34.02.16" },
                    { name: "Sedayu", bpsCode: "34.02.17" }
                ]
            }, {
                name: 'Kabupaten Gunung Kidul',
                bpsCode: '34.03',
                districts: [
                    { name: "Wonosari", bpsCode: "34.03.01" },
                    { name: "Nglipar", bpsCode: "34.03.02" },
                    { name: "Playen", bpsCode: "34.03.03" },
                    { name: "Patuk", bpsCode: "34.03.04" },
                    { name: "Paliyan", bpsCode: "34.03.05" },
                    { name: "Panggang", bpsCode: "34.03.06" },
                    { name: "Tepus", bpsCode: "34.03.07" },
                    { name: "Semanu", bpsCode: "34.03.08" },
                    { name: "Karangmojo", bpsCode: "34.03.09" },
                    { name: "Ponjong", bpsCode: "34.03.10" },
                    { name: "Rongkop", bpsCode: "34.03.11" },
                    { name: "Semin", bpsCode: "34.03.12" },
                    { name: "Ngawen", bpsCode: "34.03.13" },
                    { name: "Gedangsari (Gedang Sari)", bpsCode: "34.03.14" },
                    { name: "Saptosari (Sapto Sari)", bpsCode: "34.03.15" },
                    { name: "Girisubo", bpsCode: "34.03.16" },
                    { name: "Tanjungsari", bpsCode: "34.03.17" },
                    { name: "Purwosari", bpsCode: "34.03.18" }
                ]
            }, {
                name: 'Kabupaten Sleman',
                bpsCode: '34.04',
                districts: [
                    { name: "Gamping", bpsCode: "34.04.01" },
                    { name: "Godean", bpsCode: "34.04.02" },
                    { name: "Moyudan", bpsCode: "34.04.03" },
                    { name: "Minggir", bpsCode: "34.04.04" },
                    { name: "Seyegan", bpsCode: "34.04.05" },
                    { name: "Mlati", bpsCode: "34.04.06" },
                    { name: "Depok", bpsCode: "34.04.07" },
                    { name: "Berbah", bpsCode: "34.04.08" },
                    { name: "Prambanan", bpsCode: "34.04.09" },
                    { name: "Kalasan", bpsCode: "34.04.10" },
                    { name: "Ngemplak", bpsCode: "34.04.11" },
                    { name: "Ngaglik", bpsCode: "34.04.12" },
                    { name: "Sleman", bpsCode: "34.04.13" },
                    { name: "Tempel", bpsCode: "34.04.14" },
                    { name: "Turi", bpsCode: "34.04.15" },
                    { name: "Pakem", bpsCode: "34.04.16" },
                    { name: "Cangkringan", bpsCode: "34.04.17" }
                ]
            }, {
                name: 'Kota Yogyakarta',
                bpsCode: '34.71',
                districts: [
                    { name: "Tegalrejo", bpsCode: "34.71.01" },
                    { name: "Jetis", bpsCode: "34.71.02" },
                    { name: "Gondokusuman", bpsCode: "34.71.03" },
                    { name: "Danurejan", bpsCode: "34.71.04" },
                    { name: "Gedongtengen (Gedong Tengen)", bpsCode: "34.71.05" },
                    { name: "Ngampilan", bpsCode: "34.71.06" },
                    { name: "Wirobrajan", bpsCode: "34.71.07" },
                    { name: "Mantrijeron", bpsCode: "34.71.08" },
                    { name: "Kraton", bpsCode: "34.71.09" },
                    { name: "Gondomanan", bpsCode: "34.71.10" },
                    { name: "Pakualaman", bpsCode: "34.71.11" },
                    { name: "Mergangsan", bpsCode: "34.71.12" },
                    { name: "Umbulharjo", bpsCode: "34.71.13" },
                    { name: "Kotagede", bpsCode: "34.71.14" }
                ]
            }
        ]
    },
};

export const PROVINCE_EXTENDED_DATA = MergeRecursive(PROVINCE_DATA, PROVINCE_DATA_EXTENSION);