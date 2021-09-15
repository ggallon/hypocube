interface ByMonth {
  data: Array<[number, number]>;
  error: Array<[number, number]>;
  key: string;
  meta: {
    seriesName: string;
  };
}

export const byMonthSeries: Array<ByMonth> = [
  {
    data: [
      [0, 79.4952380952381],
      [1, 74.54523809523809],
      [2, 36.53809523809524],
      [3, 20.797142857142862],
      [4, 20.029047619047613],
      [5, 10.04142857142857],
      [6, 18.51190476190476],
      [7, 20.850952380952386],
      [8, 70.54285714285716],
      [9, 154.14380952380952],
      [10, 137.46809523809523],
      [11, 143.467619047619],
    ],
    error: [
      [0, 9.788668764979034],
      [1, 9.909079987086399],
      [2, 5.498295753274479],
      [3, 3.695202488169143],
      [4, 4.412573970781572],
      [5, 2.7213421058629987],
      [6, 4.411289628949362],
      [7, 4.175702222096189],
      [8, 10.108422301653775],
      [9, 21.374690752427387],
      [10, 16.745141569735274],
      [11, 18.750658896359322],
    ],
    key: 'Vancouver',
    meta: { seriesName: 'Vancouver' },
  },
  {
    data: [
      [0, 118.71095238095238],
      [1, 128.59952380952376],
      [2, 76.75428571428571],
      [3, 51.107142857142854],
      [4, 48.47571428571429],
      [5, 25.525238095238098],
      [6, 34.885714285714286],
      [7, 45.70428571428572],
      [8, 122.48666666666668],
      [9, 203.28857142857146],
      [10, 191.32714285714286],
      [11, 181.33190476190472],
    ],
    error: [
      [0, 12.253695322131156],
      [1, 14.383688496415122],
      [2, 9.69351977943439],
      [3, 7.739309493008497],
      [4, 8.895439039996042],
      [5, 4.8335562674366574],
      [6, 6.569926614071554],
      [7, 9.163195715157768],
      [8, 18.173083759597144],
      [9, 23.73860237792324],
      [10, 22.306276054701993],
      [11, 21.840193135374882],
    ],
    key: 'Victoria',
    meta: { seriesName: 'Victoria' },
  },
  {
    data: [
      [0, 17.285238095238096],
      [1, 15.482857142857146],
      [2, 17.19904761904762],
      [3, 36.040000000000006],
      [4, 33.80380952380952],
      [5, 20.18619047619048],
      [6, 22.594761904761906],
      [7, 24.471904761904767],
      [8, 20.093809523809526],
      [9, 33.77761904761904],
      [10, 41.759047619047614],
      [11, 40.57904761904762],
    ],
    error: [
      [0, 2.360223758561079],
      [1, 2.5570141627631693],
      [2, 1.97833239058027],
      [3, 3.1662533063543727],
      [4, 3.8517755336863484],
      [5, 3.8857463584110534],
      [6, 4.705887396705981],
      [7, 6.064950633803725],
      [8, 2.8868676384456493],
      [9, 5.245492259799747],
      [10, 4.803427843490422],
      [11, 5.99948573192895],
    ],
    key: 'Kelowna',
    meta: { seriesName: 'Kelowna' },
  },
];

export default byMonthSeries;
