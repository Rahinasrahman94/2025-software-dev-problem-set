class Solution {
    public int maxArea(int[] height) {
        int l = 0;
        int r = height.length - 1;
        int ans=0;
        while(l<r)
        {
            int width = r-l;
            int min_length = Math.min(height[l],height[r]);
            int container = min_length * width;
            ans = Math.max(ans,container);
            if(height[l] < height[r])
            {
                l++;
            }
            else
            {
                r--;
            }

        }

        return ans;
    }
}