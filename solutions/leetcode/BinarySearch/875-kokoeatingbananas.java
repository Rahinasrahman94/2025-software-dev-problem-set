class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int left = 1;
        int ans = 0;
        int right = -1;
        for(int i=0;i<piles.length;i++)
        {
            right = Math.max(right,piles[i]);
        }

        while(left <= right)
        {
            int mid = left + (right-left)/2;
            int timetaken = 0;
            for(int i = 0;i < piles.length;i++)
            {
                timetaken +=  Math.ceil((double)piles[i]/mid);
            }
            if(timetaken > h)
            {
                left =  mid+1;
            }
            else
            {
                ans  = mid;
                right = mid-1;
            }
        }
        return ans;
    }
}