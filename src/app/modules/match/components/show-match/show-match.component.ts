import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';

const MAP_AREAS = [
    { id: 13,
      slug: 'castle_black',
      type: 'Land',
      fortification_type: null,
      barrels_count: 0,
      crowns_count: 1,
      house_sigil: null,
      names: {
          en: 'Castle Black',
          pt: 'Castelo Negro' },
      path: "M759.652,218.863L1025.12,220.697C1026.86,227.915 1029.9,232.067 1034.24,233.154C1029.76,263.13 1034.74,279.428 1049.17,282.047C1050.22,287.783 1053.43,289.294 1058.81,286.582C1057.45,291.895 1058.06,297.635 1063.01,304.314C1062.61,309.093 1063.08,313.716 1069.68,317.254C1066.28,325.406 1069.25,335.459 1075.1,346.375C1073.42,361.586 1075.36,371.533 1078.93,379.086C1076.84,387.4 1077.37,394.065 1080.54,399.08C1040.47,409.734 1028.8,347.445 991.537,379.937C967.494,390.179 952.701,397.182 953.492,414.389C916.141,391.132 884.633,378.782 871.408,400.561C866.288,409.575 855.705,412.451 839.66,409.187C832.6,409.242 825.238,412.685 817.574,419.516C797.79,436.655 802.32,416.208 772.236,444.082C751.053,474.513 738.489,487.915 734.545,484.289C710.097,478.496 685.739,512.901 668.971,496.117C639.824,496.126 618.783,496.453 611.955,486.121L610.473,477.348C617.726,473.171 622.546,466.66 624.932,457.816C638.667,446.674 635.554,434.812 624.783,422.623C628.85,419.842 630.708,415.764 630.355,410.387C637.124,410.751 641.043,406.314 642.111,397.076C646.956,393.962 647.864,387.748 644.834,378.434C644.945,365.805 638.441,355.949 625.32,348.867C636.337,345.632 640.823,341.763 638.779,337.26C666.469,329.409 680.915,318.999 682.117,306.029C687.868,310.187 694.409,310.798 701.74,307.861C715.882,307.835 720.449,300.14 715.439,284.777C722.51,275.833 729.421,267.101 746.67,244.551C754.561,242.426 758.889,233.863 759.652,218.863Z" },
    { id: 14,
      slug: 'karhold',
      type: 'Land',
      fortification_type: null,
      barrels_count: 0,
      crowns_count: 1,
      house_sigil: null,
      names: {
          en: 'Karhold',
          pt: 'Karhold' },
      path: "M1104.4,394.96C1077.68,406.359 1053.8,399.929 1031.95,380.696C1020.61,365.439 1006.5,365.405 990.098,377.984C969.27,391.275 956.953,394.22 952.889,412.797C973.001,438.782 992.365,466.749 1010.46,498.073C1040.58,509.721 1056.46,519.922 1051.5,528.008C1055.54,550.74 1068.38,540.87 1078.59,564.412L1079.33,602.973C1082.47,608.572 1087.45,610.031 1094.27,607.352C1085.93,618.179 1086.75,631.848 1089.46,646.106C1094.97,662.526 1108.38,653.412 1118.04,663.943C1123.46,663.896 1128.87,664.502 1134.22,669.683C1135.83,676.325 1138.36,680.789 1141.81,683.076C1150.83,683.94 1156.12,680.669 1153.16,668.303C1152.63,659.743 1156.39,654.402 1163.1,651.262L1188.22,651.447L1199.34,624.289C1194.16,610.864 1196.63,602.188 1204.33,596.761C1202.83,591.007 1204.05,587.175 1207.99,585.265C1202.96,568.201 1202.4,551.226 1207.25,534.355C1219.44,541.423 1226.21,552.134 1225.09,568.168C1235.68,571.661 1245.2,575.156 1253.16,578.655L1252.61,592.845L1262.43,601L1268.48,585.569C1263.24,578.189 1263.47,569.836 1267.44,560.818C1276.9,558.055 1280.05,549.441 1280.34,538.169C1287.12,534.665 1293.18,523.866 1298.75,508.075L1293.94,497.579C1299.66,493.83 1302.22,487.119 1301.59,477.446C1293.12,475.985 1293.14,469.744 1297.02,461.331C1285.17,459.328 1282.78,448.978 1288.25,431.712C1280.72,426.066 1276.84,420.423 1276.59,414.781C1256.4,420.976 1239.82,424.083 1228.51,422.677C1221.45,440.574 1207.28,442.148 1189.88,436.302C1189.79,430.762 1189.88,427.779 1186.1,426.61C1175.37,427.653 1169.13,421.667 1164.93,412.485C1151.77,416.386 1142.75,412.584 1135.84,404.886C1119.35,409.953 1108.88,406.645 1104.4,394.96Z" },
    { id: 15,
      slug: 'winterfell',
      type: 'Land',
      fortification_type: 'stronghold',
      barrels_count: 1,
      crowns_count: 1,
      house_sigil: 'Stark',
      names: {
          en: 'Winterfell',
          pt: 'Winterfell' },
      path: "M611.537,487.287C603.582,493.494 596.423,497.682 594.838,487.734C583.835,511.27 574.552,508.853 566.051,494.639L555.684,499.822C548.579,520.908 537.392,522.265 522.121,503.895L511.551,512.652C499.607,524.691 490.368,518.457 483.836,493.951C465.746,491.039 466.789,481.061 461.289,464.24C461.642,482.206 467.613,496.402 474.396,496.914L476.359,516.908L474.508,529.256L430.189,550.359L371.689,530.365L346.883,519.129C342.535,517.249 339.926,511.03 338.107,502.838L334.295,494.191L305.396,471.478C294.918,487.165 279.76,486.096 264.299,480.455L260.838,487.119C284.067,490.063 296.908,497.012 305.027,505.781C321.502,517.273 326.525,528.88 320.096,540.603L313.652,552.119C320.835,560.669 325.597,580.043 328.703,606.824L311.783,609.193C311.123,623.736 300.175,628.944 280.682,628.557L298.195,637.203C309.567,634.523 318.039,643.495 323.611,664.119L371.225,643.867C384.987,641.203 397.443,642.064 407.027,650.68C432.861,661.263 441.815,673.957 439.221,688.094C438.249,696.019 441.934,705.926 447.736,716.732C447.221,734.578 456.073,747.375 478.615,752.795L500.59,751.535L527.879,771.289C525.443,783.902 536.996,792.571 554.906,799.447C551.546,807.331 552.656,813.34 558.238,817.477C550.75,874.482 528.887,925.219 492.648,969.686C491.259,997.295 488.498,1009.34 472.414,1010.62L465.119,1027.54L458.936,1047.66L486.463,1038.27C489.797,1043.69 494.734,1042.69 501.273,1035.29L514.621,1026.28L527.729,1026.28C533.316,1033.58 542.486,1036.79 555.238,1035.9C561.852,1038.06 565.777,1043.46 567.014,1052.08C601.806,1052.46 638.187,1046.63 675.885,1035.66L682.678,1040.25C714.836,1021.99 714.815,1017.31 758.857,1029.72C766.477,1027.28 776.084,1022.55 777.758,1017.5C769.558,1010.42 760.909,997.447 755.285,986.861C739.831,954.626 746.001,930.27 773.797,913.793C798.535,905.756 799.032,888.811 782.943,865.771C781.361,853.85 782.672,839.813 790.348,821.121C816.593,767.503 840.129,740.309 860.955,739.537C885.799,721.89 914.956,690.441 944.779,656.861C957.524,636.408 971.488,641.707 986.006,658.711C996.017,673.882 1005.91,677.744 1015.74,676.465C1031.21,696.181 1046.78,711.317 1062.82,704.383L1077.14,702.16L1094.6,705.012L1083.62,696.107L1081.4,683.26L1093.53,681.777C1081.94,680.825 1078.86,672.624 1084.29,657.174L1089.62,646.139L1088.88,619L1094.2,608.115C1087.87,610.455 1082.76,608.93 1078.87,603.541L1078.5,568.146C1080.13,560.683 1075.36,553.686 1064.17,547.154C1058.39,544.767 1054.07,538.589 1051.19,528.621C1058.69,520.372 1041.28,509.784 1012.56,498.133C987.197,457.038 966.485,427.159 953.648,416.289C918.665,392.857 887.155,377.525 872.383,401.221C862.992,410.228 851.643,412.406 838.338,407.754C821.618,418.309 805.741,427.524 795.76,427.359C768.692,435.686 755.16,473.347 736.52,483.506C717.498,476.447 694.111,508.21 670.857,496.836C645.132,498.247 623.658,496.376 611.537,487.287Z" } ];

@Component({
    selector: 'app-show-match',
    templateUrl: './show-match.component.html',
    styleUrls: ['./show-match.component.scss']
})
export class ShowMatchComponent implements OnInit {

    match: Match;
    areas = MAP_AREAS;
    units = ['footman', 'knight', 'siege-engine', 'boat'];
    boardUnits = [];
    areaUnit = { castle_black: {id: 13, units: [{id: 1, type: 'footman', x: 685, y: 347}]},
                 karhold: {id: 14, units: []},
                 winterfell: {id: 15, units: []} };

    constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService, public router: Router) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            if (this.matchService.matches.length === 0) {
                return this.router.navigate(['/matches']);
            } else {
                this.match = this.matchService.find(params['id']);
            }
        });
    }

    @HostListener('mouseup', ['$event'])
    onMouseup(event: MouseEvent) {
        document.removeEventListener('mousemove', this.onMousemove, true);

        document['movingElement'].style.display = 'none';
        let territory = document.elementFromPoint(event.clientX, event.clientY)
        document['movingElement'].removeAttribute('style');

        console.log('moved ' + document['movingElement'].getAttribute('data-unit-type') + ' to: ', territory.id);

        if (document.getElementById('new-board-unit')) document.getElementById('new-board-unit').removeAttribute('id');
        if (!this.areaUnit[territory.id]) return;
        if (this.areaUnit[territory.id].units.map((unit) => unit.id).indexOf(parseInt(document['movingElement'].getAttribute('id'))) !== -1) return;

        // TODO: Prevent from creating a new unit if moving to another area. Should change the unit area instead.
        // TODD: Move this temp logic to a service to be deleted in the future.

        let id = this.areaUnit[territory.id].units.length + 1;
        this.areaUnit[territory.id].units.push(
            {id: id, type: document['movingElement'].getAttribute('data-unit-type'), x: (event.clientX + document['movingElementOffsetX']), y: (event.clientY + document['movingElementOffsetY'])}
        );

        this.boardUnits = []; // remove temp element
        console.log('moved', this.areaUnit);
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(event: MouseEvent) {
        console.log('event.target.offsetLeft', event.target.offsetLeft);
        console.log('event.clientX', event.clientX);
        document['movingElementOffsetX'] = event.target.getAttribute('x') ? (event.target.getAttribute('x') - event.clientX) : (event.target.offsetLeft - event.clientX);
        document['movingElementOffsetY'] = event.target.getAttribute('y') ? (event.target.getAttribute('y') - event.clientY) : (event.target.offsetHeight - event.clientY);

        if (event.target.getAttribute('data-unit-new')) {
            this.boardUnits.push(
                {id: 'new-board-unit', type: event.target.getAttribute('data-unit-type'), x: document['movingElementOffsetX'], y: document['movingElementOffsetY']}
            );
        } else {
            // Unless new unit, get mousedown target
            document['movingElement'] = event.target;
        }

        document.addEventListener('mousemove', this.onMousemove, true);
        event.preventDefault(); // https://stackoverflow.com/questions/9506041/javascript-events-mouseup-not-firing-after-mousemove
    }

    onMousemove(event: MouseEvent) {
        let movingElement = document.getElementById('new-board-unit') ? document.getElementById('new-board-unit') : document['movingElement'];
        let mousePositionY = event.clientY;
        let mousePositionX = event.clientX;
        let top = mousePositionY + document['movingElementOffsetY'];
        let left = mousePositionX + document['movingElementOffsetX'];

        movingElement.setAttribute('y', top);
        movingElement.setAttribute('x', left);

        document['movingElement'] = movingElement;
    }

    log(event:any) {
        console.log(event.type, event);
    }
}
