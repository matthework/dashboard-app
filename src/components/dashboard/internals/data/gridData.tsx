import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { GridCellParams, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

type SparkLineData = number[];

function getDaysInMonth(month: number, year: number) {
  const date = new Date(year, month, 0);
  const monthName = date.toLocaleDateString("en-US", {
    month: "short",
  });
  const daysInMonth = date.getDate();
  const days = [];
  let i = 1;
  while (days.length < daysInMonth) {
    days.push(`${monthName} ${i}`);
    i += 1;
  }
  return days;
}

function renderSparklineCell(params: GridCellParams<SparkLineData, any>) {
  const data = getDaysInMonth(4, 2024);
  const { value, colDef } = params;

  if (!value || value.length === 0) {
    return null;
  }

  return (
    <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
      <SparkLineChart
        data={value}
        width={colDef.computedWidth || 100}
        height={32}
        plotType="bar"
        showHighlight
        showTooltip
        colors={["hsl(210, 98%, 42%)"]}
        xAxis={{
          scaleType: "band",
          data,
        }}
      />
    </div>
  );
}

function renderStatus(status: "Leased" | "Vacated") {
  const colors: { [index: string]: "success" | "default" } = {
    Leased: "success",
    Vacated: "default",
  };

  return <Chip label={status} color={colors[status]} size="small" />;
}

export function renderAvatar(
  params: GridCellParams<{ name: string; color: string }, any, any>
) {
  if (params.value == null) {
    return "";
  }

  return (
    <Avatar
      sx={{
        backgroundColor: params.value.color,
        width: "24px",
        height: "24px",
        fontSize: "0.85rem",
      }}
    >
      {params.value.name.toUpperCase().substring(0, 1)}
    </Avatar>
  );
}

export const columns: GridColDef[] = [
  { field: "pageTitle", headerName: "Property Code", flex: 1, minWidth: 80 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 80,
    renderCell: (params) => renderStatus(params.value as any),
  },
  {
    field: "users",
    headerName: "Location",
    headerAlign: "right",
    align: "right",
    flex: 1.5,
    minWidth: 150,
  },
  {
    field: "eventCount",
    headerName: "Site Manager",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "viewsPerUser",
    headerName: "Lease Expiry",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 80,
  },
  {
    field: "averageTime",
    headerName: "Building Type",
    headerAlign: "right",
    align: "right",
    flex: 1,
    minWidth: 80,
  },
  {
    field: "conversions",
    headerName: "Usage",
    flex: 1,
    minWidth: 150,
    renderCell: renderSparklineCell,
  },
];

export const rows: GridRowsProp = [
  {
    id: 1,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2026-06-12",
    averageTime: "Office",
    conversions: [
      469172, 488506, 592287, 617401, 640374, 632751, 668638, 807246, 749198,
      944863, 911787, 844815, 992022, 1143838, 1446926, 1267886, 1362511,
      1348746, 1560533, 1670690, 1695142, 1916613, 1823306, 1683646, 2025965,
      2529989, 3263473, 3296541, 3041524, 2599497,
    ],
  },
  {
    id: 2,
    pageTitle: "5130",
    status: "Leased",
    eventCount: "Sarge Rentals",
    users: "1615 E Matlock RD",
    viewsPerUser: "2028-09-22",
    averageTime: "Store",
    conversions: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 557488, 1341471, 2044561, 2206438,
    ],
  },
  {
    id: 3,
    pageTitle: "4856",
    status: "Vacated",
    eventCount: "Sarge Rentals",
    users: "549 W Hoosier Court AVE",
    viewsPerUser: "2024-08-22",
    averageTime: "Warehouse",
    conversions: [
      166896, 190041, 248686, 226746, 261744, 271890, 332176, 381123, 396435,
      495620, 520278, 460839, 704158, 559134, 681089, 712384, 765381, 771374,
      851314, 907947, 903675, 1049642, 1003160, 881573, 1072283, 1139115,
      1382701, 1395655, 1355040, 1381571,
    ],
  },
  {
    id: 4,
    pageTitle: "4847",
    status: "Leased",
    eventCount: "James Bond",
    users: "536 W Hoosier Court AVE",
    viewsPerUser: "2025-06-18",
    averageTime: "Office",
    conversions: [
      264651, 311845, 436558, 439385, 520413, 533380, 562363, 533793, 558029,
      791126, 649082, 566792, 723451, 737827, 890859, 935554, 1044397, 1022973,
      1129827, 1145309, 1195630, 1358925, 1373160, 1172679, 1340106, 1396974,
      1623641, 1687545, 1581634, 1550291,
    ],
  },
  {
    id: 5,
    pageTitle: "7568",
    status: "Leased",
    eventCount: "Jason Paris",
    users: "549 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      251871, 262216, 402383, 396459, 378793, 406720, 447538, 451451, 457111,
      589821, 640744, 504879, 626099, 662007, 754576, 768231, 833019, 851537,
      972306, 1014831, 1027570, 1189068, 1119099, 987244, 1197954, 1310721,
      1480816, 1577547, 1854053, 1791831,
    ],
  },
  {
    id: 6,
    pageTitle: "5137",
    status: "Leased",
    eventCount: "John Walker",
    users: "101 N Roosevelt ST",
    viewsPerUser: "2026-06-12",
    averageTime: "Store",
    conversions: [
      13671, 16918, 27272, 34315, 42212, 56369, 64241, 77857, 70680, 91093,
      108306, 94734, 132289, 133860, 147706, 158504, 192578, 207173, 220052,
      233496, 250091, 285557, 268555, 259482, 274019, 321648, 359801, 399502,
      447249, 497403,
    ],
  },
  {
    id: 7,
    pageTitle: "5138",
    status: "Vacated",
    eventCount: "Allen Key",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      93682, 107901, 144919, 151769, 170804, 183736, 201752, 219792, 227887,
      295382, 309600, 278050, 331964, 356826, 404896, 428090, 470245, 485582,
      539056, 582112, 594289, 671915, 649510, 574911, 713843, 754965, 853020,
      916793, 960158, 984265,
    ],
  },
  {
    id: 8,
    pageTitle: "2398",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Warehouse",
    conversions: [
      52394, 63357, 82800, 105466, 128729, 144472, 172148, 197919, 212302,
      278153, 290499, 249824, 317499, 333024, 388925, 410576, 462099, 488477,
      533956, 572307, 591019, 681506, 653332, 581234, 719038, 783496, 911609,
      973328, 1056071, 1112940,
    ],
  },
  {
    id: 9,
    pageTitle: "9876",
    status: "Leased",
    eventCount: "Tom Hanks",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      15372, 16901, 25489, 30148, 40857, 51136, 64627, 75804, 89633, 100407,
      114908, 129957, 143568, 158509, 174822, 192488, 211512, 234702, 258812,
      284328, 310431, 338186, 366582, 396749, 428788, 462880, 499125, 537723,
      578884, 622825,
    ],
  },
  {
    id: 10,
    pageTitle: "3568",
    status: "Leased",
    eventCount: "Chris Young",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      70211, 89234, 115676, 136021, 158744, 174682, 192890, 218073, 240926,
      308190, 317552, 279834, 334072, 354955, 422153, 443911, 501486, 538091,
      593724, 642882, 686539, 788615, 754813, 687955, 883645, 978347, 1142551,
      1233074, 1278155, 1356724,
    ],
  },
  {
    id: 11,
    pageTitle: "1688",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      49662, 58971, 78547, 93486, 108722, 124901, 146422, 167883, 189295,
      230090, 249837, 217828, 266494, 287537, 339586, 363299, 412855, 440900,
      490111, 536729, 580591, 671635, 655812, 576431, 741632, 819296, 971762,
      1052605, 1099234, 1173591,
    ],
  },
  {
    id: 12,
    pageTitle: "7868",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      29589, 37965, 55800, 64672, 77995, 91126, 108203, 128900, 148232, 177159,
      193489, 164471, 210765, 229977, 273802, 299381, 341092, 371567, 413812,
      457693, 495920, 564785, 541022, 491680, 618096, 704926, 833365, 904313,
      974622, 1036567,
    ],
  },
  {
    id: 13,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Bob Cube",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      8472, 9637, 14892, 19276, 23489, 28510, 33845, 39602, 45867, 52605, 59189,
      65731, 76021, 85579, 96876, 108515, 119572, 131826, 145328, 160192,
      176528, 196662, 217929, 239731, 262920, 289258, 315691, 342199, 370752,
      402319,
    ],
  },
  {
    id: 14,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      15792, 16948, 22728, 25491, 28412, 31268, 34241, 37857, 42068, 46893,
      51098, 55734, 60780, 66421, 72680, 79584, 87233, 95711, 105285, 115814,
      127509, 140260, 154086, 169495, 186445, 205109, 225580, 247983, 272484,
      299280,
    ],
  },
  {
    id: 15,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      25638, 28355, 42089, 53021, 66074, 80620, 97989, 118202, 142103, 166890,
      193869, 225467, 264089, 307721, 358059, 417835, 488732, 573924, 674878,
      794657, 938542, 1111291, 1313329, 1543835, 1812156, 2123349, 2484926,
      2907023, 3399566, 3973545,
    ],
  },
  {
    id: 16,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      241732, 256384, 289465, 321423, 345672, 378294, 398472, 420364, 436278,
      460192, 495374, 510283, 532489, 559672, 587312, 610982, 629385, 654732,
      678925, 704362, 725182, 749384, 772361, 798234, 819472, 846291, 872183,
      894673, 919283, 945672,
    ],
  },
  {
    id: 17,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      12345, 14567, 16789, 18901, 21023, 23145, 25267, 27389, 29501, 31623,
      33745, 35867, 37989, 40101, 42223, 44345, 46467, 48589, 50701, 52823,
      54945, 57067, 59189, 61301, 63423, 65545, 67667, 69789, 71901, 74023,
    ],
  },
  {
    id: 18,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      23456, 25678, 27890, 30102, 32324, 34546, 36768, 38980, 41202, 43424,
      45646, 47868, 50080, 52302, 54524, 56746, 58968, 61180, 63402, 65624,
      67846, 70068, 72290, 74502, 76724, 78946, 81168, 83380, 85602, 87824,
    ],
  },
  {
    id: 19,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      123456, 145678, 167890, 190012, 212324, 234546, 256768, 278980, 301202,
      323424, 345646, 367868, 390080, 412302, 434524, 456746, 478968, 501180,
      523402, 545624, 567846, 590068, 612290, 634502, 656724, 678946, 701168,
      723380, 745602, 767824,
    ],
  },
  {
    id: 20,
    pageTitle: "4798",
    status: "Leased",
    eventCount: "Tracey B Walker",
    users: "507 W Hoosier Court AVE",
    viewsPerUser: "2024-06-12",
    averageTime: "Office",
    conversions: [
      234567, 256789, 278901, 301023, 323245, 345467, 367689, 389801, 412023,
      434245, 456467, 478689, 500801, 523023, 545245, 567467, 589689, 611801,
      634023, 656245, 678467, 700689, 722801, 745023, 767245, 789467, 811689,
      833801, 856023, 878245,
    ],
  },
];
