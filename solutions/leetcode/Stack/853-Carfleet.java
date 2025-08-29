class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int fleet = position.length;
        Map<Integer,Float> mapval = new HashMap<>();
        for(int i=0;i<position.length;i++)
        {
            float time = (float)(target - position[i])/speed[i];
            mapval.put(position[i],time);
        }
        Arrays.sort(position);
        int i = position.length - 1;
        while(i > 0)
        {
            float c = mapval.get(position[i]);
            i--;
            while(i  >=  0 && c >= mapval.get(position[i]))
            {
                fleet--;
                i--;
            }
        }
        return fleet;


    }
}